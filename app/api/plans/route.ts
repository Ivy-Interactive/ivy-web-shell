import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import YAML from 'yaml';

interface PlanMetadata {
  state: string;
  project: string;
  title: string;
  created: string;
  updated: string;
}

interface PlanResponse {
  id: string;
  title: string;
  state: string;
  project: string;
  created: string;
  updated: string;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fromParam = searchParams.get('from');
    const toParam = searchParams.get('to');
    const projectFilter = searchParams.get('project');

    const plansDir = process.env.TENDRIL_PLANS_DIR || '/home/joel/.tendril/Plans/';

    if (!fs.existsSync(plansDir)) {
      return NextResponse.json({ error: 'Plans directory not found' }, { status: 404 });
    }

    const defaultFrom = new Date();
    defaultFrom.setDate(defaultFrom.getDate() - 7);
    const fromDate = fromParam ? new Date(fromParam) : defaultFrom;
    const toDate = toParam ? new Date(toParam) : new Date();

    const entries = fs.readdirSync(plansDir, { withFileTypes: true });
    const plans: PlanResponse[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const match = entry.name.match(/^(\d{5})-/);
      if (!match) continue;

      const planId = match[1];
      const planYamlPath = path.join(plansDir, entry.name, 'plan.yaml');

      if (!fs.existsSync(planYamlPath)) continue;

      try {
        const yamlContent = fs.readFileSync(planYamlPath, 'utf-8');
        const planData = YAML.parse(yamlContent) as PlanMetadata;

        const createdDate = new Date(planData.created);
        if (createdDate >= fromDate && createdDate <= toDate) {
          if (!projectFilter || planData.project === projectFilter) {
            plans.push({
              id: planId,
              title: planData.title,
              state: planData.state,
              project: planData.project,
              created: planData.created,
              updated: planData.updated,
            });
          }
        }
      } catch (err) {
        console.error(`Failed to parse ${planYamlPath}:`, err);
      }
    }

    plans.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error reading plans:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
