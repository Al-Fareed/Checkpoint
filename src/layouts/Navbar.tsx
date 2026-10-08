import {
  CircleUserRound,
  EllipsisVertical,
  Flag,
  Search,
} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-900 text-white ">
      <div className="mx-auto flex h-16 max-w-screen-3xl items-center justify-between px-4 sm:px-6 lg:px-3">

        <a
          href="/"
          className="flex items-center gap-2.5"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-violet-600 text-white">
            <Flag size={20} strokeWidth={2.2} />
          </span>

          <span className="text-lg font-semibold tracking-tight">
            Checkpoint
          </span>
        </a>

        <div className="absolute left-1/2 hidden w-[min(42vw,36rem)] -translate-x-1/2 sm:block">
          <Search
            aria-hidden="true"
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            placeholder="Search projects, tasks, and more..."
            aria-label="Search"
            className="h-10 w-full rounded-xl border border-slate-700 bg-slate-800 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            aria-label="User profile"
            className="flex size-10 items-center justify-center rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <CircleUserRound size={22} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="More options"
            className="flex size-10 items-center justify-center rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <EllipsisVertical size={21} />
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar