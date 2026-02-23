"use client";

import React, { useState } from "react";

export default function SafeOnlinePayments() {
  const [checklistItems, setChecklistItems] = useState([
    {
      id: 1,
      text: "Сайт использует HTTPS (есть замок в адресной строке)",
      checked: false,
      critical: true,
    },
    {
      id: 2,
      text: "Есть реальные контакты и адрес магазина",
      checked: false,
      critical: true,
    },
    {
      id: 3,
      text: "Почитал отзывы о магазине в интернете",
      checked: false,
      critical: false,
    },
    {
      id: 4,
      text: "Использую виртуальную карту для оплаты",
      checked: false,
      critical: true,
    },
    {
      id: 5,
      text: "Не использую общественный Wi-Fi",
      checked: false,
      critical: true,
    },
    {
      id: 6,
      text: "Включены уведомления о транзакциях",
      checked: false,
      critical: false,
    },
    {
      id: 7,
      text: "Установлен лимит на онлайн-платежи",
      checked: false,
      critical: false,
    },
  ]);

  const toggleChecklistItem = (id: number) => {
    setChecklistItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const completedCount = checklistItems.filter((item) => item.checked).length;
  const totalCount = checklistItems.length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] via-[#00b8ff] to-[#64ffda] bg-clip-text text-transparent">
            Безопасные онлайн-траты
          </h1>

          <p className="text-xl md:text-2xl text-[#64ffda] mb-8 font-light tracking-wide">
            Как защитить свои финансы в интернете
          </p>

          {/* Shield icon */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-[#00ffff]/20 to-[#00b8ff]/10 border-2 border-[#00ffff] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.4)]">
              <span className="text-6xl">🔒</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#64ffda]/5 border border-[#64ffda]/20 rounded-xl max-w-lg mx-auto">
            <p className="text-[#e6f1ff] font-medium mb-2">Яриновская Карина</p>
            <p className="text-[#8892b0] text-sm">Автор проекта</p>
            <div className="my-3 h-px bg-[#ffffff]/10" />
            <p className="text-[#8892b0] text-sm">Руководитель: Долгова Е.А.</p>
            <p className="text-[#64ffda] text-sm mt-3">
              📍 Ростов-на-Дону, 2026
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-[#64ffda]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#00ffff] to-[#64ffda] bg-clip-text text-transparent">
              Актуальность проблемы
            </span>
          </h2>
          <p className="text-[#8892b0] text-center mb-12 max-w-2xl mx-auto">
            В современном мире интернет-мошенничество растёт экспоненциально.
            Вот что показывают исследования:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "65%", label: "Рост фишинговых атак в 2022" },
              { value: "1 млн", label: "Новых вредоносных программ" },
              { value: "4 млрд", label: "Утечек данных за год" },
              { value: "60%", label: "Взломов из-за слабых паролей" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#64ffda]/5 border border-[#64ffda]/15 rounded-2xl p-6 text-center hover:bg-[#64ffda]/10 transition-all duration-300 hover:border-[#64ffda]/30"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#64ffda] to-[#00ffff] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-[#8892b0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/50 via-[#1b263b]/50 to-[#0d1b2a]/50" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ff4444] bg-clip-text text-transparent">
              ⚠️ Основные угрозы
            </span>
          </h2>
          <p className="text-[#8892b0] text-center mb-12 max-w-2xl mx-auto">
            Знание врага в лицо — первый шаг к защите
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎣",
                title: "Фишинг",
                description:
                  "Поддельные сайты и письма, которые крадут ваши данные. Мошенники создают копии популярных сайтов.",
                danger: "Высокая",
                color: "from-[#ff6b6b]/20 to-[#ff4444]/10",
                borderColor: "border-[#ff6b6b]/30",
              },
              {
                icon: "🦠",
                title: "Вредоносное ПО",
                description:
                  "Вирусы и трояны, которые крадут пароли, данные карт и блокируют устройства.",
                danger: "Высокая",
                color: "from-[#ff8800]/20 to-[#ff6600]/10",
                borderColor: "border-[#ff8800]/30",
              },
              {
                icon: "📞",
                title: "Социальная инженерия",
                description:
                  "Звонки от «банка» с просьбой назвать код. Психологическое давление для получения данных.",
                danger: "Очень высокая",
                color: "from-[#ff4444]/20 to-[#ff2222]/10",
                borderColor: "border-[#ff4444]/30",
              },
              {
                icon: "📶",
                title: "Публичный Wi-Fi",
                description:
                  "Открытые сети в кафе и торговых центрах. Данные передаются без шифрования.",
                danger: "Средняя",
                color: "from-[#ffa500]/20 to-[#ff8800]/10",
                borderColor: "border-[#ffa500]/30",
              },
            ].map((threat, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${threat.color} ${threat.borderColor} border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{threat.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#e6f1ff] mb-2">
                      {threat.title}
                    </h3>
                    <p className="text-[#8892b0] text-sm mb-3">
                      {threat.description}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        threat.danger === "Очень высокая"
                          ? "bg-[#ff4444]/20 text-[#ff6b6b]"
                          : threat.danger === "Высокая"
                            ? "bg-[#ff8800]/20 text-[#ffa500]"
                            : "bg-[#ffa500]/20 text-[#ffc107]"
                      }`}
                    >
                      Опасность: {threat.danger}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Rules Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#64ffda] to-[#00ffff] bg-clip-text text-transparent">
              🛡️ 6 правил безопасности
            </span>
          </h2>
          <p className="text-[#8892b0] text-center mb-12 max-w-2xl mx-auto">
            Простые правила, которые защитят ваши деньги
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔐",
                title: "Надёжные пароли",
                tips: [
                  "12+ символов",
                  "Буквы + цифры + символы",
                  "Уникальный для каждого сайта",
                ],
                example: { good: "K@rinA_2026#Secure!", bad: "123456" },
              },
              {
                icon: "📱",
                title: "2FA везде",
                tips: [
                  "SMS + пароль",
                  "Google Authenticator",
                  "Аппаратные ключи",
                ],
                example: { good: "Двухфакторная", bad: "Только пароль" },
              },
              {
                icon: "🔗",
                title: "Проверяйте HTTPS",
                tips: [
                  "Замок в адресной строке",
                  "https:// в начале",
                  "Проверка сертификата",
                ],
                example: { good: "https:// + 🔒", bad: "http://" },
              },
              {
                icon: "📶",
                title: "Без публичного Wi-Fi",
                tips: [
                  "Мобильный интернет",
                  "VPN для публичных сетей",
                  "Домашняя сеть",
                ],
                example: { good: "4G/5G", bad: "Cafe_WiFi_Free" },
              },
              {
                icon: "🛡️",
                title: "Антивирус",
                tips: [
                  "Kaspersky, Dr.Web",
                  "Регулярные обновления",
                  "Сканирование файлов",
                ],
                example: { good: "Защищено", bad: "Без защиты" },
              },
              {
                icon: "📊",
                title: "Контроль выписок",
                tips: [
                  "Проверка раз в неделю",
                  "Уведомления о транзакциях",
                  "Блокировка при подозрениях",
                ],
                example: { good: "Мониторинг", bad: "Игнорирование" },
              },
            ].map((rule, i) => (
              <div
                key={i}
                className="bg-[#00ffff]/5 border border-[#00ffff]/15 rounded-2xl p-6 hover:bg-[#00ffff]/10 hover:border-[#00ffff]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00ffff]/20 to-[#00b8ff]/10 rounded-xl flex items-center justify-center border border-[#00ffff]/30">
                    <span className="text-2xl">{rule.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#e6f1ff]">
                    {rule.title}
                  </h3>
                </div>

                <ul className="space-y-2 mb-4">
                  {rule.tips.map((tip, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-[#8892b0]"
                    >
                      <span className="text-[#64ffda]">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#ffffff]/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#64ffda]">
                      ✓ {rule.example.good}
                    </span>
                    <span className="text-[#ff6b6b]">✗ {rule.example.bad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/50 via-[#1b263b]/50 to-[#0d1b2a]/50" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#64ffda] to-[#00ffff] bg-clip-text text-transparent">
              📋 Чек-лист перед покупкой
            </span>
          </h2>
          <p className="text-[#8892b0] text-center mb-12">
            Проверьте каждый пункт перед оплатой
          </p>

          {/* Progress bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#8892b0]">Прогресс</span>
              <span className="text-[#64ffda] font-medium">
                {completedCount} из {totalCount}
              </span>
            </div>
            <div className="h-2 bg-[#ffffff]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#64ffda] to-[#00ffff] transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
            {completedCount === totalCount && (
              <p className="text-center text-[#64ffda] text-sm mt-3 animate-pulse">
                ✓ Все пункты проверены! Можно оплачивать безопасно
              </p>
            )}
          </div>

          <div className="space-y-4">
            {checklistItems.map((item, i) => (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  item.checked
                    ? item.critical
                      ? "bg-[#64ffda]/15 border-[#64ffda]/40"
                      : "bg-[#ffffff]/15 border-[#ffffff]/30"
                    : item.critical
                      ? "bg-[#64ffda]/5 border-[#64ffda]/20 hover:bg-[#64ffda]/10"
                      : "bg-[#ffffff]/5 border-[#ffffff]/10 hover:bg-[#ffffff]/10"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center transition-all duration-300 ${
                    item.checked
                      ? "bg-gradient-to-br from-[#64ffda] to-[#00ffff] text-[#0d1b2a] scale-110"
                      : "border-2 border-[#64ffda] text-transparent hover:border-[#00ffff]"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-all duration-300 ${item.checked ? "opacity-100" : "opacity-0"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className={`flex-1 transition-all duration-300 ${
                    item.checked
                      ? "text-[#64ffda] line-through opacity-70"
                      : "text-[#e6f1ff]"
                  }`}
                >
                  {item.text}
                </span>
                {item.critical && (
                  <span
                    className={`text-xs px-2 py-1 rounded transition-all duration-300 ${
                      item.checked
                        ? "bg-[#64ffda]/20 text-[#64ffda]"
                        : "bg-[#ff6b6b]/20 text-[#ff6b6b]"
                    }`}
                  >
                    {item.checked ? "✓ Готово" : "Важно!"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#ffc107] to-[#ff9800] bg-clip-text text-transparent">
              🚨 Если обманули
            </span>
          </h2>
          <p className="text-[#8892b0] text-center mb-12">
            Действуйте быстро и по плану
          </p>

          <div className="space-y-4">
            {[
              {
                num: 1,
                text: "Срочно позвоните в банк для блокировки карты",
                icon: "📱",
              },
              {
                num: 2,
                text: "Сообщите взрослым (родителям, учителям)",
                icon: "👨‍👩‍👧",
              },
              {
                num: 3,
                text: "Сохраните все доказательства (скриншоты, переписку)",
                icon: "💾",
              },
              { num: 4, text: "Обратитесь в полицию с заявлением", icon: "👮" },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#ffc107]/10 to-[#ff9800]/5 border border-[#ffc107]/20 rounded-xl hover:from-[#ffc107]/15 hover:to-[#ff9800]/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffc107] to-[#ff9800] text-[#0d1b2a] flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <span className="text-2xl">{step.icon}</span>
                <span className="text-[#e6f1ff] flex-1">{step.text}</span>
              </div>
            ))}
          </div>

          {/* Emergency contacts */}
          <div className="mt-12 p-6 bg-[#ffc107]/5 border border-[#ffc107]/20 rounded-2xl">
            <h3 className="text-xl font-semibold text-[#ffc107] mb-4 flex items-center gap-2">
              <span>📞</span> Важные контакты
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#ffffff]/5 rounded-xl">
                <div className="text-2xl font-bold text-[#ffc107]">102</div>
                <div className="text-sm text-[#8892b0]">Полиция</div>
              </div>
              <div className="text-center p-4 bg-[#ffffff]/5 rounded-xl">
                <div className="text-2xl font-bold text-[#ffc107]">112</div>
                <div className="text-sm text-[#8892b0]">
                  Единая служба спасения
                </div>
              </div>
              <div className="text-center p-4 bg-[#ffffff]/5 rounded-xl">
                <div className="text-2xl font-bold text-[#ffc107]">
                  Горячая линия
                </div>
                <div className="text-sm text-[#8892b0]">Вашего банка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/50 via-[#1b263b]/50 to-[#0d1b2a]/50" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#8a73ff] to-[#64ffda] bg-clip-text text-transparent">
              📚 Полезные ресурсы
            </span>
          </h2>
          <p className="text-[#8892b0] text-center mb-12">
            Источники для углублённого изучения
          </p>

          <div className="space-y-3">
            {[
              {
                title: "Финансовая безопасность — Википедия",
                url: "ru.wikipedia.org/wiki/Финансовая_безопасность",
              },
              { title: "Цифровая безопасность — vc.ru", url: "vc.ru" },
              {
                title:
                  "Финансовая безопасность в цифровом мире — budget.mos.ru",
                url: "budget.mos.ru",
              },
              { title: "Безопасность в интернете — sky.pro", url: "sky.pro" },
              {
                title:
                  "Правила финансовой безопасности — journal.sovcombank.ru",
                url: "journal.sovcombank.ru",
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-[#8a73ff]/5 border border-[#8a73ff]/15 rounded-xl hover:bg-[#8a73ff]/10 hover:border-[#8a73ff]/30 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-[#8a73ff] text-xl group-hover:scale-110 transition-transform">
                  🔗
                </span>
                <div className="flex-1">
                  <div className="text-[#e6f1ff]">{resource.title}</div>
                  <div className="text-sm text-[#8892b0]">{resource.url}</div>
                </div>
                <svg
                  className="w-5 h-5 text-[#8a73ff] opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#64ffda]/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-4xl">🛡️</span>
          </div>
          <h3 className="text-2xl font-bold text-[#64ffda] mb-2">
            Будь в безопасности!
          </h3>
          <p className="text-[#8892b0] mb-6">
            Помните: безопасность в интернете — это постоянный процесс
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-[#8892b0]"></div>

          <div className="mt-6 pt-6 border-t border-[#ffffff]/10">
            <p className="text-xs text-[#64ffda]">
              Индивидуальный проект Яриновской Карины
            </p>
            <p className="text-xs text-[#8892b0] mt-1">
              Руководитель: Долгова Елена Александровна
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
