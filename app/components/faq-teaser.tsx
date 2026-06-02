import Link from 'next/link';

const QUESTIONS = [
  {
    question: 'Do we have to use Tendril?',
    answer:
      'No. Tendril is open source and free. If you want to install it yourself, the docs are public and our Discord is open. The packages exist for teams that want to move faster than they could alone.',
  },
  {
    question: 'Do we have to migrate our existing AI tools?',
    answer:
      'No. Tendril is code- and model-agnostic. Whatever you are running today (Claude, Codex, GPT, an open-weight model, your own .NET stack), we work with it. The orchestration layer sits on top.',
  },
  {
    question: 'What about EU regulatory requirements?',
    answer:
      'We design for it. Tendril supports routing specific tasks to specific models, so sensitive work can stay on EU-hosted or on-prem models while other work uses frontier capability.',
  },
  {
    question: 'What is Tendril?',
    answer:
      'Tendril is a desktop app that makes ad-hoc AI coding structured, verifiable, and self-improving. It manages AI coding agents with a plan-based lifecycle, two human checkpoints, and automated verifications.',
  },
  {
    question: 'Is Tendril cloud-based?',
    answer:
      'No. Tendril is a local-first desktop application. Your code never leaves your machine. The only external calls are to the LLM API (which you choose) and GitHub.',
  },
];

export function FaqTeaserSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-content px-4">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Common questions
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Answers on engagement, migration, and EU compliance.
        </h2>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {QUESTIONS.map((q) => (
            <details key={q.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                {q.question}
                <span className="text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-muted-foreground">{q.answer}</p>
            </details>
          ))}
        </div>

        <Link
          href="/faq"
          className="mt-10 inline-block text-sm font-medium text-accent hover:underline"
        >
          Read all FAQs →
        </Link>
      </div>
    </section>
  );
}
