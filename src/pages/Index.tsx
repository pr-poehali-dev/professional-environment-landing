import { useState } from "react";
import Icon from "@/components/ui/icon";

const events = [
  {
    date: "11", month: "МАР", time: "19:00–20:30",
    speaker: "Архангельская Наталья",
    title: "Психопатология",
    course: "Психиатрическая пропедевтика",
  },
  {
    date: "15", month: "АПР", time: "19:00–20:30",
    speaker: "Степанова Екатерина",
    title: "Диагностика, которая лечит: как на первом интервью заложить основу стратегии и запустить изменения",
    course: "Девиантное поведение",
  },
  {
    date: "13", month: "МАЙ", time: "19:00–20:30",
    speaker: "Марченко Татьяна",
    title: "Психотерапия панических атак",
    course: "",
  },
  {
    date: "10", month: "ИЮН", time: "19:00–20:30",
    speaker: "Карпуль Анна",
    title: "Призвание или симуляция в профессии психоаналитика или психолога (психотерапевта)",
    course: "Психиатрическая пропедевтика",
  },
  {
    date: "8", month: "ИЮЛ", time: "19:00–20:30",
    speaker: "Мельник Екатерина",
    title: "Перенос / контрперенос — с разбором кейсов",
    course: "Основы психоанализа",
  },
  {
    date: "12", month: "АВГ", time: "19:00–20:30",
    speaker: "Степанова Екатерина",
    title: "Диагностика, которая лечит: как на первом интервью заложить основу стратегии и запустить изменения",
    course: "Девиантное поведение",
  },
  {
    date: "9", month: "СЕН", time: "19:00–20:30",
    speaker: "Пекарская Светлана",
    title: "Управление разрушением: специфика работы с шоковыми состояниями клиента",
    course: "Психология агрессии · Девиантное поведение",
  },
  {
    date: "14", month: "ОКТ", time: "19:00–20:30",
    speaker: "Чуйкова Марина",
    title: "Агрессия и безопасность в работе психолога с клиентом",
    course: "Психология агрессии",
  },
  {
    date: "11", month: "НОЯ", time: "19:00–20:30",
    speaker: "Митрофанов Сергей",
    title: "Перенос / контрперенос — с разбором кейсов",
    course: "",
  },
];

type FormState = { name: string; email: string; phone: string };

export default function Index() {
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const selectedEvent = selected !== null ? events[selected] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const closeModal = () => {
    setSelected(null);
    setSent(false);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-semibold text-gray-900 tracking-tight">Профессиональная среда</span>
          <a
            href="#events"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Расписание
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Открытые вебинары<br />по психологии и психиатрии
        </h1>
        <p className="mt-3 text-gray-500 text-base max-w-xl leading-relaxed">
          Каждый месяц — живая встреча с практикующим специалистом. Выберите тему и запишитесь.
        </p>
      </section>

      {/* EVENTS */}
      <section id="events" className="max-w-3xl mx-auto px-4 pb-20">
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {events.map((event, i) => (
            <button
              key={i}
              onClick={() => { setSelected(i); setSent(false); }}
              className="w-full text-left flex items-start gap-5 px-5 py-5 hover:bg-gray-50 transition-colors group"
            >
              {/* Дата */}
              <div className="shrink-0 w-11 text-center pt-0.5">
                <div className="text-2xl font-semibold text-gray-900 leading-none">{event.date}</div>
                <div className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wide">{event.month}</div>
              </div>

              {/* Контент */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon name="Clock" size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-400">{event.time}</span>
                  {event.course && (
                    <>
                      <span className="text-gray-300 text-xs">·</span>
                      <span className="text-xs text-indigo-500">{event.course}</span>
                    </>
                  )}
                </div>
                <div className="text-gray-900 font-medium text-sm leading-snug">{event.title}</div>
                <div className="text-gray-400 text-sm mt-0.5">{event.speaker}</div>
              </div>

              {/* CTA */}
              <div className="shrink-0 self-center">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full group-hover:bg-indigo-100 transition-colors whitespace-nowrap">
                  Записаться
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4 pb-4 sm:pb-0"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            {/* Шапка */}
            <div className="px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-400">{selectedEvent!.date} {selectedEvent!.month} · {selectedEvent!.time}</span>
                  </div>
                  <h2 className="text-base font-semibold text-gray-900 leading-snug">{selectedEvent!.title}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">{selectedEvent!.speaker}</p>
                </div>
                <button onClick={closeModal} className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors mt-0.5">
                  <Icon name="X" size={18} />
                </button>
              </div>
            </div>

            {/* Форма / Успех */}
            <div className="px-6 py-5">
              {sent ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Check" size={22} className="text-green-500" />
                  </div>
                  <p className="font-medium text-gray-900">Заявка принята!</p>
                  <p className="text-sm text-gray-500 mt-1">Мы свяжемся с вами ближе к дате события.</p>
                  <button
                    onClick={closeModal}
                    className="mt-4 text-sm text-indigo-600 hover:underline"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="example@mail.ru"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-3 rounded-lg transition-colors mt-1"
                  >
                    Записаться на вебинар
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
