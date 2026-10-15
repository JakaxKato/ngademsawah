let currentIntent = "menginap";
const WHATSAPP_NUMBER = "6281228171970";

const roomData = {
  "estetik-1": {
    title: "Kabin Estetik 1",
    badge: "Kapasitas 3 - 4 Tamu · Mezzanine",
    desc: "Kabin panggung kayu dua lantai dengan bukaan kaca panorama menghadap langsung Gunung Salak dan hamparan sawah Cicurug. Sangat cocok bagi keluarga inti yang mendambakan udara segar dan ketenangan.",
    weekday: "Rp1.000.000",
    weekend: "Rp1.300.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyc-B3jR_S65orN_fIYt7fd0pw4MHENulyGwGmOEuj4ggGcEzpfLoDsFgIcuYIH5Lrrit5haqnZFsrFSUeLhuzrJJxFN2UrHbJFiCkl8NTMFuPsSx5ZT-vzEriDjVW488-ub9U5ddOvRcP5pjvTX3-tF069h2DzpLxU5cGZ0aBxZ5rfZLapkvgO_lkKtD_e6odmsgENS4M_5ddCa0gLQZxya6K50tvL7rEKxCxOw_TjbgiKX8u-Bv_PQ",
  },
  "estetik-2": {
    title: "Kabin Estetik 2",
    badge: "Kapasitas 2 - 3 Tamu · Ground Suite",
    desc: "Dibangun dari kayu jati hangat dengan akses pintu geser ke setapak sawah. Dilengkapi kasur King size, daybed santai, kulkas mini, dan kamar mandi semi-terbuka yang asri.",
    weekday: "Rp800.000",
    weekend: "Rp1.000.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyc-B3jR_S65orN_fIYt7fd0pw4MHENulyGwGmOEuj4ggGcEzpfLoDsFgIcuYIH5Lrrit5haqnZFsrFSUeLhuzrJJxFN2UrHbJFiCkl8NTMFuPsSx5ZT-vzEriDjVW488-ub9U5ddOvRcP5pjvTX3-tF069h2DzpLxU5cGZ0aBxZ5rfZLapkvgO_lkKtD_e6odmsgENS4M_5ddCa0gLQZxya6K50tvL7rEKxCxOw_TjbgiKX8u-Bv_PQ",
  },
  "estetik-3": {
    title: "Kabin Estetik 3",
    badge: "Kapasitas 2 - 3 Tamu · Intimate Pod",
    desc: "Kabin mungil berdesain pod kayu yang intim. Memiliki teras kayu beratap rindang yang sempurna untuk membaca buku sambil ditemani teh hangat dan pemandangan fajar.",
    weekday: "Rp600.000",
    weekend: "Rp800.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3xCGlfg5X_Sg6SJGvF5kOWQ3hg8nnjqE_xUozUsEH_INObeemlayj3zlOS54xpn0jF6djMH9R10d0alIzCaim5va5e78ek7drR91_jHgtvHicFpFFs46qpbhSOax8NwddEqCTaislqXevw-jn-lsf89KWnBzY75_sAUfkXOEY8o4uEzVzyhgN4nwL8vntuQmzFOMRNQPMaBTKVtBnX51QTaVX7k6NQuAy57Dfs57F080pihRG9576NA",
  },
  classic: {
    title: "Kamar Klasik",
    badge: "Kapasitas 1 - 2 Tamu · Simple Comfort",
    desc: "Kamar sederhana yang tenang dengan kasur Queen nyaman, kamar mandi dalam, kipas angin hening, dan teras langsung ke halaman rumput hijau retreat.",
    weekday: "Rp300.000",
    weekend: "Rp350.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyc-B3jR_S65orN_fIYt7fd0pw4MHENulyGwGmOEuj4ggGcEzpfLoDsFgIcuYIH5Lrrit5haqnZFsrFSUeLhuzrJJxFN2UrHbJFiCkl8NTMFuPsSx5ZT-vzEriDjVW488-ub9U5ddOvRcP5pjvTX3-tF069h2DzpLxU5cGZ0aBxZ5rfZLapkvgO_lkKtD_e6odmsgENS4M_5ddCa0gLQZxya6K50tvL7rEKxCxOw_TjbgiKX8u-Bv_PQ",
  },
};

function openModal(intent = "menginap", roomName = "") {
  document.getElementById("reservation-modal").classList.remove("hidden");
  switchModalTab(intent);
  if (roomName) document.getElementById("res-room").value = roomName;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("reservation-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function switchModalTab(intent) {
  currentIntent = intent;
  const stayFields = document.getElementById("stay-fields");
  const diningFields = document.getElementById("dining-fields");
  const eventFields = document.getElementById("event-fields");
  const buttons = [
    document.getElementById("tab-btn-menginap"),
    document.getElementById("tab-btn-makan"),
    document.getElementById("tab-btn-acara"),
  ];
  buttons.filter(Boolean).forEach((button) => {
    button.className =
      "py-2 rounded-full font-medium text-on-surface-variant hover:text-primary transition-all";
  });
  const activeClass =
    "py-2 rounded-full font-semibold bg-surface-container-lowest text-primary shadow-xs transition-all";

  if (stayFields) stayFields.classList.toggle("hidden", intent !== "menginap");
  diningFields.classList.toggle("hidden", intent !== "makan");
  eventFields.classList.toggle("hidden", intent !== "acara");
  document.getElementById(`tab-btn-${intent}`).className = activeClass;
}

function openRoomDetailModal(roomId) {
  const data = roomData[roomId] || roomData["estetik-1"];
  document.getElementById("room-modal-title").innerText = data.title;
  document.getElementById("room-modal-badge").innerText = data.badge;
  document.getElementById("room-modal-desc").innerText = data.desc;
  document.getElementById("room-modal-img").src = data.img;
  document.getElementById("room-detail-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeRoomDetailModal() {
  document.getElementById("room-detail-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function handleReservationSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("res-name").value || "Tamu";
  const phone = document.getElementById("res-phone").value || "";
  const guests = document.getElementById("res-guests").value || "2";
  const notes = document.getElementById("res-notes").value || "-";
  let message = "";

  if (currentIntent === "menginap") {
    const room = document.getElementById("res-room").value;
    const checkin =
      document.getElementById("res-checkin").value || "menyesuaikan";
    const checkout =
      document.getElementById("res-checkout").value || "menyesuaikan";
    message = `Halo Ngadem di Sawah, saya ingin menanyakan ketersediaan kamar ${room} untuk tanggal ${checkin} sampai ${checkout}, untuk ${guests} orang. Nama saya ${name}.`;
  } else if (currentIntent === "makan") {
    const dateDining =
      document.getElementById("res-date-dining").value || "Hari ini/Besok";
    const timeDining = document.getElementById("res-time-dining").value;
    const areaDining = document.getElementById("res-area-dining").value;
    message = `Halo Ngadem di Sawah, saya ingin reservasi meja makan di ${areaDining} untuk tanggal ${dateDining} jam ${timeDining}, dengan jumlah rombongan ${guests} orang. Nama saya ${name} (${phone}). Catatan: ${notes}`;
  } else {
    const dateEvent =
      document.getElementById("res-date-event").value || "Menyesuaikan";
    const typeEvent = document.getElementById("res-type-event").value;
    message = `Halo Ngadem di Sawah, saya ingin menanyakan paket ${typeEvent} pada tanggal ${dateEvent} untuk sekitar ${guests} orang. Nama saya ${name} (${phone}). Catatan acara: ${notes}`;
  }

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
  closeModal();
}

function copyAddress() {
  const address =
    "6QJ6+7VX, Cisaat, Kec. Cicurug, Kabupaten Sukabumi, Jawa Barat 43359";
  navigator.clipboard.writeText(address).then(() => {
    const textSpan = document.getElementById("copy-btn-text");
    textSpan.innerText = "Tersalin ke Clipboard!";
    setTimeout(() => {
      textSpan.innerText = "Salin Alamat";
    }, 2500);
  });
}

window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("reservation-modal"))
    closeModal();
  if (event.target === document.getElementById("room-detail-modal"))
    closeRoomDetailModal();
});
