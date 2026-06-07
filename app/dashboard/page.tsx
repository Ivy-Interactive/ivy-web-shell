export default function DashboardPage() {
  const plans = [
    { id: '00011', title: 'Change hero title from collaboration to coding', state: 'Completed', project: 'ivy-web-shell' },
    { id: '00008', title: 'Add Background Music To Landing Page', state: 'Completed', project: 'ivy-web-shell' },
    { id: '00007', title: 'Add Team Section to Start Page', state: 'Completed', project: 'ivy-web-shell' },
    { id: '00006', title: 'Change Header Download Button From Green To White', state: 'Completed', project: 'ivy-web-shell' },
    { id: '00005', title: 'Header Text Color Swap', state: 'Completed', project: 'ivy-web-shell' },
    { id: '00004', title: 'Show GitHub Star Count With Filled Green Star Icon', state: 'Completed', project: 'ivy-web-shell' },
    { id: '00009', title: 'Replace Placeholder Background Music With Real Asset', state: 'Skipped', project: 'ivy-web-shell' },
    { id: '00003', title: 'Add Button To Header', state: 'Skipped', project: 'ivy-web-shell' },
  ];

  const completedCount = plans.filter(p => p.state === 'Completed').length;
  const skippedCount = plans.filter(p => p.state === 'Skipped').length;

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Jobs Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Plans created in the last week</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted p-6">
            <div className="text-3xl font-bold text-foreground">{plans.length}</div>
            <div className="mt-1 text-sm text-muted-foreground">Total Plans</div>
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
          {plans.map((plan) => (
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
