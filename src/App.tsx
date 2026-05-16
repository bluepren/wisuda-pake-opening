import { useEffect, useState, useRef } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeGallery, setActiveGallery] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Graduation date: 19 Mei 2026, 11:00 WIB
  const graduationDate = new Date("2026-05-19T11:00:00+07:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = graduationDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [graduationDate]);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isOpen]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const galleryItems = [
    {
      image: "/images/graduate.jpg",
      tag: "Momen Kelulusan",
      title: "Resmi Bergelar S.Kom",
      desc: "Perjuangan akhir menyelesaikan tugas akhir dan skripsi dengan hasil yang membanggakan."
    },
    {
      image: "/images/campus.jpg",
      tag: "Kampus Tercinta",
      title: "UPI YPTK Padang",
      desc: "Tempat menimba ilmu, bertemu teman seperjuangan, dan mengukir kenangan indah selama 4 tahun."
    },
    {
      image: "/images/graduate.jpg",
      tag: "Hari Bahagia",
      title: "Toga & Senyuman",
      desc: "Langkah awal menuju masa depan yang cerah dengan iringan doa restu dari kedua orang tua."
    },
    {
      image: "/images/campus.jpg",
      tag: "Kenangan Kuliah",
      title: "Gedung Penuh Cerita",
      desc: "Saksi bisu setiap perjuangan, diskusi kelompok, tugas malam, dan tawa bersama sahabat."
    },
  ];

  if (!isOpen) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#0f172a]">
        {/* Blue Denim Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#312e81]" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          {/* Denim texture overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#3b82f6]/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#60a5fa]/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1d4ed8]/10 blur-3xl" />

        <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
          <div className="w-full max-w-lg">
            {/* Envelope */}
            <div className="relative">
              {/* Envelope shadow */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-black/20 blur-2xl" />
              
              {/* Main envelope */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#e0e7ff] to-white p-[1px] shadow-2xl">
                <div className="relative rounded-[2rem] bg-white">
                  {/* Denim top flap */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]" />
                    <div className="absolute inset-0 opacity-40" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
                    }} />
                    {/* Envelope flap shape */}
                    <svg className="absolute bottom-0 w-full text-white" viewBox="0 0 400 80" preserveAspectRatio="none">
                      <path d="M0,0 L200,80 L400,0 L400,80 L0,80 Z" fill="currentColor" />
                    </svg>
                    
                    {/* Wax seal */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4">
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-[#1e3a8a]/20 blur-xl" />
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#dc2626] to-[#991b1b] shadow-xl ring-4 ring-white/20">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] shadow-inner">
                            <span className="text-3xl">🎓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-10 pt-8 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eff6ff] px-4 py-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563eb]" />
                      <span className="text-xs font-medium uppercase tracking-widest text-[#1e40af]">Undangan Resmi</span>
                    </div>

                    <h1 className="font-['Cormorant_Garamond'] text-[2.5rem] font-semibold leading-tight text-[#0f172a]">
                      Wisuda
                      <span className="block bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
                        Sarjana Komputer
                      </span>
                    </h1>
                    
                    <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#93c5fd] to-transparent" />
                    
                    <p className="font-['Outfit'] text-[15px] leading-relaxed text-slate-600">
                      Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri prosesi wisuda putri kami
                    </p>

                    <div className="mt-8">
                      <div className="inline-block rounded-2xl bg-[#f8fafc] p-1 shadow-inner">
                        <div className="rounded-xl bg-white px-8 py-5 shadow-sm ring-1 ring-slate-100">
                          <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.2em] text-slate-500">Wisudawati</p>
                          <p className="mt-1.5 font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1e3a8a]">Wisma Putri, S.Kom</p>
                          <p className="mt-1 font-['Outfit'] text-sm text-slate-500">Teknik Informatika • UPI YPTK Padang</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsOpen(true)}
                      className="group relative mt-10 w-full overflow-hidden rounded-2xl bg-[#1e3a8a] px-8 py-4 font-['Outfit'] text-[15px] font-medium text-white shadow-lg shadow-[#1e3a8a]/25 transition-all hover:shadow-xl hover:shadow-[#1e3a8a]/30 active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af] to-[#2563eb] opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.1) 6px, rgba(255,255,255,0.1) 12px)`,
                      }} />
                      <span className="relative flex items-center justify-center gap-2.5">
                        <span>Buka Undangan</span>
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>

                    <p className="mt-4 font-['Outfit'] text-xs text-slate-400">Ketuk untuk melihat detail acara</p>
                  </div>
                </div>
              </div>

              {/* Denim corner accents */}
              <div className="absolute -left-3 -top-3 h-12 w-12 rounded-tl-[1.5rem] border-l-[3px] border-t-[3px] border-[#60a5fa]/50" />
              <div className="absolute -right-3 -top-3 h-12 w-12 rounded-tr-[1.5rem] border-r-[3px] border-t-[3px] border-[#60a5fa]/50" />
              <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-bl-[1.5rem] border-b-[3px] border-l-[3px] border-[#60a5fa]/50" />
              <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-[1.5rem] border-b-[3px] border-r-[3px] border-[#60a5fa]/50" />
            </div>

            <div className="mt-8 text-center">
              <p className="font-['Outfit'] text-xs text-white/60">© 2026 Undangan Wisuda Digital</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/24/audio_6fdaa5c7c8.mp3" type="audio/mpeg" />
      </audio>

      {/* Music control */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1e3a8a] text-white shadow-lg shadow-[#1e3a8a]/20 backdrop-blur-xl transition-all hover:scale-105 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full bg-[#1e3a8a] animate-ping opacity-20" />
        <span className="relative text-lg">{isPlaying ? "🎵" : "🔇"}</span>
      </button>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] via-[#1e40af] to-[#312e81]" />
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:pt-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#93c5fd] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#bfdbfe]" />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/90">Anda Diundang</span>
            </div>

            <h1 className="mt-8 font-['Cormorant_Garamond'] text-5xl font-bold leading-[1.1] text-white md:text-7xl lg:text-8xl">
              Wisuda
              <span className="mt-2 block text-3xl font-medium tracking-wide text-[#bfdbfe] md:text-4xl lg:text-5xl">
                Sarjana Komputer
              </span>
            </h1>

            <div className="mx-auto mt-8 flex max-w-fit items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                <span className="text-xl">🎓</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#dbeafe] md:text-lg">
              Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri prosesi wisuda
            </p>
          </div>

          {/* Countdown */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="group relative">
                <div className="absolute -inset-0.5 rounded-[1.25rem] bg-gradient-to-b from-white/20 to-white/5 opacity-50 blur-xl transition-opacity group-hover:opacity-75" />
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl md:p-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="relative text-center">
                    <div className="font-['Cormorant_Garamond'] text-3xl font-bold text-white md:text-5xl">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-[#bfdbfe] md:text-xs">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="h-auto w-full fill-[#f8fafc]">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Graduate Profile */}
      <section className="relative -mt-1 bg-[#f8fafc] px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-[#1e3a8a] shadow-2xl shadow-[#1e3a8a]/20">
                <img src="/images/graduate.jpg" alt="Wisma Putri" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 via-transparent to-transparent" />
                
                {/* Denim texture overlay */}
                <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)`,
                }} />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-sm">🎓</span>
                    <span className="text-xs font-medium text-white">Angkatan 2022</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-[#dbeafe] blur-3xl" />
              <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-[#bfdbfe] blur-3xl" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#dbeafe] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1e40af]">Wisudawati</span>
              </div>
              
              <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl font-bold leading-tight text-[#0f172a] md:text-5xl">
                Wisma Putri,
                <span className="block text-[#1e3a8a]">S.Kom</span>
              </h2>
              
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
                <p>
                  Alhamdulillah, puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya. Dengan penuh rasa syukur, saya mengundang Bapak/Ibu/Saudara/i untuk menghadiri prosesi wisuda saya.
                </p>
                <p>
                  Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i akan menjadi kebahagiaan tersendiri bagi saya dan keluarga di hari yang bersejarah ini.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Universitas", value: "UPI YPTK", icon: "🏛️" },
                  { label: "Fakultas", value: "Ilmu Komputer", icon: "💻" },
                  { label: "Prodi", value: "Informatika", icon: "🎓" },
                ].map((item) => (
                  <div key={item.label} className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-[#bfdbfe]">
                    <div className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-[#eff6ff] transition-transform group-hover:scale-110" />
                    <div className="relative">
                      <div className="text-xl">{item.icon}</div>
                      <div className="mt-2 text-[11px] uppercase tracking-wide text-slate-500">{item.label}</div>
                      <div className="font-medium text-[#1e3a8a]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#0f172a] md:text-4xl">Detail Acara</h2>
            <p className="mt-3 text-slate-600">Simpan tanggalnya, kami tunggu kehadiran Anda</p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {[
              {
                icon: "📅",
                title: "Tanggal",
                primary: "19 Mei 2026",
                secondary: "Selasa Wage",
                color: "from-[#1e3a8a] to-[#1e40af]",
              },
              {
                icon: "⏰",
                title: "Waktu",
                primary: "11:00 WIB",
                secondary: "Sampai Selesai",
                color: "from-[#1e40af] to-[#2563eb]",
              },
              {
                icon: "📍",
                title: "Tempat",
                primary: "UPI Convention Center",
                secondary: "Universitas Putra Indonesia",
                color: "from-[#2563eb] to-[#3b82f6]",
              },
            ].map((item) => (
              <div key={item.title} className="group relative">
                <div className={`absolute -inset-0.5 rounded-2xl md:rounded-[1.75rem] bg-gradient-to-br ${item.color} opacity-0 blur-xl transition-opacity group-hover:opacity-20`} />
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#f8fafc] p-[1px] md:rounded-3xl">
                  <div className="relative h-full rounded-[0.9rem] bg-white p-3 sm:p-5 md:rounded-[1.6rem] md:p-8">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-base shadow-lg shadow-[#1e3a8a]/10 md:inline-flex md:h-12 md:w-12 md:rounded-2xl md:text-xl`}>
                      {item.icon}
                    </div>
                    <h3 className="mt-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs md:mt-5 md:text-sm">{item.title}</h3>
                    <p className="mt-1 font-['Cormorant_Garamond'] text-sm font-semibold text-[#0f172a] sm:text-lg md:mt-2 md:text-2xl">{item.primary}</p>
                    <p className="mt-0.5 text-[10px] text-slate-600 sm:text-xs md:mt-1 md:text-sm">{item.secondary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-[1px] shadow-xl shadow-[#1e3a8a]/10">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
              <div className="grid md:grid-cols-5">
                <div className="relative md:col-span-2">
                  <img src="/images/campus.jpg" alt="Venue" className="h-48 w-full object-cover md:h-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/80 to-transparent md:bg-gradient-to-t" />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur">
                      <span className="text-sm">🗺️</span>
                      <span className="text-xs font-medium text-[#1e3a8a]">Lihat Lokasi</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:col-span-3 md:p-8">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0f172a]">Alamat Lengkap</h3>
                  <p className="mt-2 text-slate-600">Jl. Raya Lubuk Begalung No. 1, Kota Padang, Sumatera Barat 25221</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="https://maps.google.com/?q=Universitas+Putra+Indonesia+YPTK+Padang" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#1e3a8a] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#1e40af] hover:shadow-lg hover:shadow-[#1e3a8a]/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Buka di Maps
                    </a>
                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      Virtual Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Album */}
      <section className="bg-[#f8fafc] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eff6ff] px-3 py-1 mb-2">
                <span className="text-sm">📸</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1e40af]">Album Kenangan</span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#0f172a] md:text-4xl">Momen Berharga</h2>
              <p className="mt-2 text-slate-600">Perjalanan dan kenangan indah selama menempuh pendidikan</p>
            </div>
            {/* Indikator Dots untuk semua layar */}
            <div className="flex gap-1.5 items-center">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGallery(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeGallery === i ? "w-8 bg-[#1e3a8a]" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                  aria-label={`Lihat foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Tampilan Utama (Featured Image) */}
          <div className="mt-8 group relative overflow-hidden rounded-3xl bg-black shadow-2xl shadow-[#1e3a8a]/15 h-[380px] sm:h-[480px] transition-all">
            <img 
              src={galleryItems[activeGallery].image} 
              alt={galleryItems[activeGallery].title} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md mb-3 text-white border border-white/20">
                <span className="text-xs font-medium tracking-wide">{galleryItems[activeGallery].tag}</span>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-4xl font-bold text-white">
                {galleryItems[activeGallery].title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-light">
                {galleryItems[activeGallery].desc}
              </p>
            </div>

            {/* Tombol navigasi kiri/kanan di foto utama */}
            <button
              onClick={() => setActiveGallery((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 active:scale-95 border border-white/20"
              aria-label="Sebelumnya"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveGallery((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 active:scale-95 border border-white/20"
              aria-label="Selanjutnya"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Grid Album Thumbnail (Muncul di Mobile & Desktop) */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveGallery(i)}
                className={`group relative overflow-hidden rounded-2xl aspect-[4/3] text-left transition-all duration-300 ${
                  activeGallery === i 
                    ? "ring-4 ring-[#1e3a8a] ring-offset-2 shadow-lg scale-[0.98]" 
                    : "opacity-70 hover:opacity-100 hover:shadow"
                }`}
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity ${
                  activeGallery === i ? "from-[#1e3a8a]/80 via-[#1e3a8a]/20 to-transparent" : "from-black/70 via-black/20 to-transparent"
                }`} />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-200">
                    {item.tag}
                  </span>
                  <h4 className="font-['Cormorant_Garamond'] text-sm sm:text-base font-bold text-white line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#0f172a] px-6 py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0f172a]" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
          }} />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
            <span className="text-2xl">🎓</span>
          </div>
          
          <h3 className="mt-6 font-['Cormorant_Garamond'] text-3xl font-semibold text-white">
            Wisma Putri, S.Kom
          </h3>
          <p className="mt-2 text-[#bfdbfe]">Teknik Informatika • Universitas Putra Indonesia YPTK Padang</p>
          
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/70">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <span>© 2026 Wisuda Wisma Putri</span>
            <span className="hidden sm:block">•</span>
            <span>Dibuat dengan 💙 Blue Denim Theme</span>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background: #f8fafc;
        }
      `}</style>
    </div>
  );
}