'use client';

import { useEffect, useState } from 'react';

interface Plan {
  id: string;
  title: string;
  state: string;
  project: string;
  created: string;
  updated: string;
}

export default function DashboardPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stateFilter, setStateFilter] = useState('All');
  const [projectFilter, setProjectFilter] = useState('All');

  // Initialize date range: 7 days ago to today
  const getDefaultFromDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split('T')[0];
  };
  const getDefaultToDate = () => new Date().toISOString().split('T')[0];

  const [fromDate, setFromDate] = useState(getDefaultFromDate());
  const [toDate, setToDate] = useState(getDefaultToDate());

  const fetchPlans = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      params.append('from', fromDate);
      params.append('to', toDate);
      if (projectFilter !== 'All') {
        params.append('project', projectFilter);
      }
      const response = await fetch(`/api/plans?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setPlans(data);
      } else {
        setError('Unable to load plans. The plans directory may be unavailable.');
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error);
      setError('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [fromDate, toDate, projectFilter]);

  const filteredPlans = stateFilter === 'All'
    ? plans
    : plans.filter(p => p.state === stateFilter);

  const projects = [...new Set(plans.map(p => p.project))].sort();

  const completedCount = plans.filter(p => p.state === 'Completed').length;
  const skippedCount = plans.filter(p => p.state === 'Skipped').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-background px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Jobs Dashboard</h1>
            <p className="mt-2 text-muted-foreground">Loading plans...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Jobs Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Plans from {fromDate} to {toDate}
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-border bg-muted p-6">
            <p className="mb-4 text-sm text-red-400">{error}</p>
            <button
              onClick={fetchPlans}
              className="rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground hover:bg-muted"
            >
              Retry
            </button>
          </div>
        )}

        <div className="mb-6 flex flex-wrap items-center gap-4">
          <div>
            <label htmlFor="fromDate" className="mr-2 text-sm font-medium text-foreground">
              From:
            </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground [color-scheme:dark]"
            />
          </div>

          <div>
            <label htmlFor="toDate" className="mr-2 text-sm font-medium text-foreground">
              To:
            </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground [color-scheme:dark]"
            />
          </div>

          <div>
            <label htmlFor="projectFilter" className="mr-2 text-sm font-medium text-foreground">
              Filter by project:
            </label>
            <select
              id="projectFilter"
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="All">All</option>
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="stateFilter" className="mr-2 text-sm font-medium text-foreground">
              Filter by state:
            </label>
            <select
              id="stateFilter"
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Draft">Draft</option>
              <option value="Skipped">Skipped</option>
              <option value="Failed">Failed</option>
              <option value="Executing">Executing</option>
              <option value="Building">Building</option>
            </select>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted p-6">
            <div className="text-3xl font-bold text-foreground">{filteredPlans.length}</div>
            <div className="mt-1 text-sm text-muted-foreground">
              {stateFilter === 'All' ? 'Total Plans' : `${stateFilter} Plans`}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-muted p-6">
            <div className="text-3xl font-bold text-accent">{completedCount}</div>
            <div className="mt-1 text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="rounded-lg border border-border bg-muted p-6">
            <div className="text-3xl font-bold text-muted-foreground">{skippedCount}</div>
            <div className="mt-1 text-sm text-muted-foreground">Skipped</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg border border-border bg-muted p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-border px-2 py-1 text-xs font-mono text-foreground">
                  {plan.id}
                </span>
                <span
                  className={`rounded-md px-2 py-1 text-xs font-medium ${
                    plan.state === 'Completed'
                      ? 'bg-accent text-background'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {plan.state}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-medium text-foreground">{plan.title}</h3>
              <p className="text-xs text-muted-foreground">{plan.project}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
