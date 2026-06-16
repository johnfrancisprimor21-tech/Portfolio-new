import { ChevronRightIcon, FacebookIcon } from '../components/Icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden px-3 pt-[70px] pb-8 sm:px-[18px] sm:pt-20 sm:pb-10 lg:min-h-screen lg:px-15 lg:pt-[100px] lg:pb-15"
    >
      <div className="relative z-[2] mx-auto flex w-full max-w-[1160px] flex-col items-center gap-10 md:flex-col-reverse md:gap-15 lg:flex-row lg:justify-between">
        <div className="flex-1">
          <div
            className="mb-7 inline-flex animate-[fade-up_0.6s_ease_0.1s_forwards] items-center gap-2 rounded-full border border-violet/20 bg-vlight px-4 py-1.5 text-[0.65rem] font-semibold text-violet opacity-0 sm:text-[0.72rem] sm:px-4 sm:py-1.5"
          >
            <span className="h-[7px] w-[7px] animate-[badge-pulse_2s_infinite] rounded-full bg-violet"></span>
            BSIT Student at Cebu Eastern College
          </div>

          <h1
            className="mb-4 animate-[fade-up_0.6s_ease_0.25s_forwards] font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.06] tracking-[-1.5px] text-text opacity-0 sm:mb-5 sm:text-[clamp(2.4rem,5vw,4rem)]"
          >
            Hello, I'm
            <br />
            <span className="text-grad">John Francis</span>
            <br />
            Primor
          </h1>

          <p className="mb-6 max-w-[480px] animate-[fade-up_0.6s_ease_0.4s_forwards] text-[0.92rem] leading-[1.6] text-sub opacity-0 sm:mb-9 sm:text-base sm:leading-[1.84]">
            A <strong className="font-semibold text-text">BS Information Technology</strong> student at Cebu Eastern
            College, Cebu City. Passionate about building systems, writing code, and turning ideas into working
            software.
          </p>

          <div className="flex animate-[fade-up_0.6s_ease_0.55s_forwards] flex-wrap gap-2 opacity-0 sm:gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-grad px-5 py-[11px] text-[0.8rem] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(124,58,237,0.4)] sm:px-7 sm:py-[13px] sm:text-[0.88rem]"
            >
              <ChevronRightIcon />
              See My Work
            </a>
            <a
              href="https://www.facebook.com/jfcp21"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-border bg-white px-5 py-[11px] text-[0.8rem] font-semibold text-text no-underline shadow-soft transition-[transform,border-color] hover:-translate-y-0.5 hover:border-violet sm:px-7 sm:py-[13px] sm:text-[0.88rem] dark:border-violet/20 dark:bg-bg2"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>

          <div className="mt-8 flex flex-wrap animate-[fade-up_0.6s_ease_0.7s_forwards] items-center gap-4 opacity-0 sm:mt-12 sm:gap-7 sm:flex-nowrap">
            <div>
              <div className="font-display text-[1.4rem] font-extrabold leading-none tracking-[-1px] text-text sm:text-[1.7rem]">
                2<span className="text-violet">yr</span>
              </div>
              <div className="mt-1 text-[0.65rem] font-medium text-muted sm:text-[0.72rem]">Coding Experience</div>
            </div>
            <div className="h-[34px] w-px bg-border"></div>
            <div>
              <div className="font-display text-[1.4rem] font-extrabold leading-none tracking-[-1px] text-text sm:text-[1.7rem]">
                4<span className="text-violet">+</span>
              </div>
              <div className="mt-1 text-[0.65rem] font-medium text-muted sm:text-[0.72rem]">Projects Built</div>
            </div>
            <div className="h-[34px] w-px bg-border"></div>
            <div>
              <div className="font-display text-[1.4rem] font-extrabold leading-none tracking-[-1px] text-text sm:text-[1.7rem]">
                3<span className="text-violet">+</span>
              </div>
              <div className="mt-1 text-[0.65rem] font-medium text-muted sm:text-[0.72rem]">Languages</div>
            </div>
          </div>
        </div>

        <div className="relative shrink-0 animate-[fade-in_0.8s_ease_0.3s_forwards] opacity-0">
          <div className="h-[280px] w-full max-w-[220px] overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(124,58,237,0.18)] sm:h-[300px] sm:max-w-[240px] md:h-[320px] md:w-[260px] md:max-w-none lg:h-[420px] lg:w-[340px]">
            <img className="h-full w-full object-cover object-top" src="/MyPic.jpg" alt="John Francis C. Primor" />
          </div>
        </div>
      </div>
    </section>
  )
}
