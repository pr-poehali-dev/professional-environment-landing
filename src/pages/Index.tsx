import { useState } from "react";
import Icon from "@/components/ui/icon";

const events = [
  { date: "12 марта", month: "МАР", title: "Открытый семинар", desc: "Введение в профессиональную среду", seats: "18 мест" },
  { date: "28 марта", month: "МАР", title: "Мастер-класс", desc: "Практические инструменты профессионала", seats: "12 мест" },
  { date: "15 апреля", month: "АПР", title: "Итоговая сессия", desc: "Защита проектов и вручение сертификатов", seats: "30 мест" },
  { date: "3 мая", month: "МАЙ", title: "Интенсив выходного дня", desc: "Углублённая работа с экспертами", seats: "8 мест" },
];

const advantages = [
  {
    icon: "Award",
    title: "Сертификация",
    desc: "Официальные документы и сертификаты после завершения каждого модуля. Признаются ведущими работодателями.",
  },
  {
    icon: "Users",
    title: "Экспертное окружение",
    desc: "Доступ к закрытому сообществу профессионалов, менторов и специалистов высокого уровня.",
  },
  {
    icon: "TrendingUp",
    title: "Карьерный рост",
    desc: "Системная работа над профессиональным профилем с измеримыми результатами.",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    desc: "Программа разработана практикующими экспертами с многолетним опытом в своих областях.",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-graphite-950 text-cream font-ibm overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-graphite-950/90 backdrop-blur-sm border-b border-graphite-700">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-cormorant text-xl font-semibold tracking-widest text-gold uppercase">
            Профессиональная Среда
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-cream-muted tracking-wider">
            <a href="#about" className="hover:text-cream transition-colors">О проекте</a>
            <a href="#advantages" className="hover:text-cream transition-colors">Преимущества</a>
            <a href="#events" className="hover:text-cream transition-colors">События</a>
            <a href="#contact" className="hover:text-cream transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-graphite-950">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 79px, #b8963e 79px, #b8963e 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #b8963e 79px, #b8963e 80px)",
            }}
          />
        </div>
        <div className="absolute right-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />
        <div className="absolute left-0 bottom-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gold-dark to-transparent opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-xs tracking-[0.3em] text-gold uppercase mb-8 font-ibm font-light">
              Профессиональное развитие · Сертификация · Нетворкинг
            </span>
          </div>

          <h1
            className="font-cormorant text-6xl md:text-8xl font-light leading-none tracking-tight text-cream animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            Среда, которая
            <br />
            <em className="font-light italic text-gold">формирует</em>
            <br />
            профессионалов
          </h1>

          <div className="mt-8 h-px w-24 bg-gold mx-auto animate-line-grow" style={{ animationDelay: "0.6s" }} />

          <p
            className="mt-8 text-lg md:text-xl text-cream-muted font-light max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Закрытая платформа для роста и развития. Получите официальные сертификаты,
            войдите в сообщество экспертов и выведите карьеру на новый уровень.
          </p>

          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#contact"
              className="px-10 py-4 bg-gold text-graphite-950 font-ibm font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,150,62,0.3)]"
            >
              Подать заявку
            </a>
            <a
              href="#events"
              className="px-10 py-4 border border-graphite-600 text-cream-muted font-ibm font-light text-sm tracking-widest uppercase hover:border-gold hover:text-cream transition-all duration-300"
            >
              Календарь событий
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-graphite-600" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-graphite-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] text-gold uppercase font-light">О проекте</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mt-4 leading-tight">
                Профессиональная
                <br />
                <em className="italic text-gold">среда</em> — не курс,
                <br />а экосистема
              </h2>
              <div className="mt-6 h-px w-16 bg-gold" />
            </div>
            <div className="space-y-6 text-cream-muted font-light leading-relaxed">
              <p className="text-base">
                Мы создали пространство, где профессионалы развиваются, обмениваются опытом
                и получают признание своей экспертизы в виде официальных документов.
              </p>
              <p className="text-base">
                Каждый участник проходит структурированную программу с практическими заданиями,
                менторской поддержкой и итоговой сертификацией. Ваши знания — подтверждены документально.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { num: "500+", label: "Выпускников" },
                  { num: "47", label: "Экспертов" },
                  { num: "12", label: "Программ" },
                  { num: "96%", label: "Рекомендуют" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-gold pl-4">
                    <div className="font-cormorant text-3xl text-gold font-light">{stat.num}</div>
                    <div className="text-xs text-cream-muted tracking-wider uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-32 bg-graphite-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-gold uppercase font-light">Ключевые преимущества</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mt-4">
              Почему выбирают нас
            </h2>
            <div className="mt-6 h-px w-16 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-graphite-700">
            {advantages.map((item, i) => (
              <div key={i} className="bg-graphite-950 p-10 group hover:bg-graphite-900 transition-colors duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors duration-300">
                    <Icon name={item.icon} size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-light text-cream mb-3">{item.title}</h3>
                    <p className="text-cream-muted font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-20 bg-graphite-800 border-y border-graphite-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border-2 border-gold flex items-center justify-center">
                <Icon name="FileText" size={28} className="text-gold" />
              </div>
              <div>
                <h3 className="font-cormorant text-3xl font-light text-cream">Официальные документы</h3>
                <p className="text-cream-muted font-light text-sm mt-1">
                  Сертификаты с юридической силой · Дипломы · Удостоверения
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm text-cream-muted font-light">
              {["PDF + оригинал", "QR-верификация", "Международный формат"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-32 bg-graphite-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs tracking-[0.3em] text-gold uppercase font-light">Ближайшие события</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mt-4">
              Календарь программ
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" />
          </div>

          <div className="space-y-px">
            {events.map((event, i) => (
              <div
                key={i}
                className="flex items-center gap-8 bg-graphite-800 hover:bg-graphite-700 transition-colors duration-300 px-8 py-6 group cursor-pointer"
              >
                <div className="text-center w-16 shrink-0">
                  <div className="font-cormorant text-3xl font-light text-gold leading-none">
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-xs tracking-widest text-cream-muted mt-1">{event.month}</div>
                </div>
                <div className="w-px h-12 bg-graphite-600 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-cormorant text-xl text-cream font-light">{event.title}</h3>
                  <p className="text-cream-muted text-sm font-light mt-1">{event.desc}</p>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <span className="text-xs text-cream-muted tracking-wider">{event.seats}</span>
                  <div className="w-8 h-8 border border-graphite-600 group-hover:border-gold flex items-center justify-center transition-colors duration-300">
                    <Icon name="ArrowRight" size={14} className="text-cream-muted group-hover:text-gold transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-graphite-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #b8963e 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream leading-tight">
            Готовы сделать
            <br />
            <em className="italic text-gold">следующий шаг?</em>
          </h2>
          <p className="mt-6 text-cream-muted font-light max-w-xl mx-auto leading-relaxed">
            Присоединяйтесь к программе и получите подтверждение своей экспертизы в виде официального сертификата.
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 px-12 py-5 bg-gold text-graphite-950 font-ibm font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_60px_rgba(184,150,62,0.4)]"
          >
            Записаться на программу
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-graphite-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <span className="text-xs tracking-[0.3em] text-gold uppercase font-light">Контакты</span>
              <h2 className="font-cormorant text-5xl font-light text-cream mt-4 leading-tight">
                Свяжитесь
                <br />с нами
              </h2>
              <div className="mt-6 h-px w-16 bg-gold" />
              <div className="mt-10 space-y-6">
                {[
                  { icon: "MapPin", label: "Адрес", value: "Москва, Бизнес-центр «Профессионал»" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@profsreda.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–18:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-graphite-600 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-cream-muted tracking-wider uppercase">{item.label}</div>
                      <div className="text-cream font-light mt-1">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 border-2 border-gold flex items-center justify-center mb-6">
                    <Icon name="Check" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-cormorant text-3xl text-cream font-light">Заявка отправлена</h3>
                  <p className="text-cream-muted font-light mt-3 text-sm">
                    Мы свяжемся с вами в течение рабочего дня
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-sm text-cream-muted font-light tracking-wider uppercase mb-6">
                    Форма заявки
                  </div>
                  {[
                    { field: "name", label: "Ваше имя", type: "text" },
                    { field: "email", label: "Email", type: "email" },
                    { field: "phone", label: "Телефон", type: "tel" },
                  ].map((item) => (
                    <div key={item.field}>
                      <label className="block text-xs text-cream-muted tracking-wider uppercase mb-2">
                        {item.label}
                      </label>
                      <input
                        type={item.type}
                        value={form[item.field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [item.field]: e.target.value })}
                        className="w-full bg-graphite-800 border border-graphite-600 text-cream font-light text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-graphite-500"
                        placeholder={item.label}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs text-cream-muted tracking-wider uppercase mb-2">
                      Сообщение
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full bg-graphite-800 border border-graphite-600 text-cream font-light text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-200 resize-none placeholder:text-graphite-500"
                      placeholder="Расскажите о вашем запросе..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-graphite-950 font-ibm font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 mt-2"
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-graphite-950 border-t border-graphite-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-lg font-light tracking-widest text-gold uppercase">
            Профессиональная Среда
          </div>
          <p className="text-xs text-graphite-500 tracking-wider">© 2026 · Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}