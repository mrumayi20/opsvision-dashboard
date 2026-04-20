type ActivityItem = {
  title: string;
  description: string;
  time: string;
};

type ActivityFeedProps = {
  activities: ActivityItem[];
};

function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-900">Activity Feed</h3>
        <p className="mt-1 text-sm text-slate-500">
          Recent updates across your workspace
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={`${item.title}-${item.time}`}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
              <span className="whitespace-nowrap text-xs text-slate-400">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
