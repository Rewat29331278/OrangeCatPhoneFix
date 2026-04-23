export const content = {
  th: {
    nav: {
      home: "หน้าแรก",
      features: "จุดเด่น",
      services: "บริการของเรา",
      portfolio: "ผลงานซ่อม",
      articles: "บทความ",
      contact: "ติดต่อเรา",
      langSwitch: "EN"
    },
    hero: {
      title: "เพื่อนซี้ซ่อมมือถือ",
      subtitle: "แมวส้มซ่อมมือถือ บริการซ่อมโทรศัพท์มือถือทุกอาการจากช่างมืออาชีพ อะไหล่คุณภาพ มีประกันทุกชิ้นงาน ราคาเป็นกันเอง",
      callBtn: "โทรหาเราเลย",
      serviceBtn: "ดูบริการของเรา"
    },
    features: {
      title: "ทำไมถึงต้องเลือกเรา?",
      subtitle: "ร้านซ่อมมือถือที่พร้อมให้บริการคุณด้วยความจริงใจ ตรงไปตรงมา ในราคาที่คุ้มค่า",
      card1: {
        title: "ราคาเป็นกันเอง",
        desc: "ซ่อมได้ตรงจุด ประเมินราคาชัดเจน ไม่มีชาร์จเพิ่ม จบทุกปัญหาในงบที่คุ้มค่า"
      },
      card2: {
        title: "ซ่อมอย่างมีคุณภาพ",
        desc: "ใช้อะไหล่คุณภาพ ซ่อมโดยช่างมืออาชีพ ใส่ใจในทุกรายละเอียด"
      },
      card3: {
        title: "การรับประกัน",
        desc: "เรามั่นใจในงานซ่อม จึงมีประกันหลังการเปลี่ยนอะไหล่ ให้คุณอุ่นใจยาวนานขึ้น"
      }
    },
    services: {
      title: "บริการรับซ่อมครบวงจร",
      subtitle: "ซ่อมทุกอาการ ไม่ว่าจะจอแตก แบตเสื่อม หรือเครื่องเปิดไม่ติด",
      items: [
        { title: "เปลี่ยนหน้าจอ", desc: "จอแตก ทัชสกรีนรวน" },
        { title: "เปลี่ยนแบตเตอรี่", desc: "แบตเสื่อม แบตบวม หมดไว ดับเอง" },
        { title: "ซ่อมเมนบอร์ด", desc: "เครื่องเปิดไม่ติด ทำตก ค้างโลโก้ เครื่องรีบูตเอง น้ำเข้า" },
        { title: "เปลี่ยนตูดชาร์จ / พอร์ตชาร์จ", desc: "ชาร์จไม่เข้า ชาร์จเข้าบ้างไม่เข้าบ้าง พอร์ตหลวมหัก" },
        { title: "เปลี่ยนลำโพง / ไมโครโฟน", desc: "เสียงสนทนาไม่ได้ยิน ลำโพงแตก ปลายทางไม่ได้ยินเสียงเรา" },
        { title: "ซ่อมเครื่องตกน้ำ", desc: "ล้างบอร์ด, ไล่ความชื้น, เช็คระบบไฟหลังตกน้ำ" },
        { title: "ซ่อมปุ่ม", desc: "ปุ่มเปิด-ปิดเสีย ปุ่มเพิ่มเสียง-ลดเสียงกดไม่ได้" },
        { title: "ปลดล็อก / ซอฟต์แวร์", desc: "ติดล็อกรหัสหน้าจอ ล็อกซิม ซอฟต์แวร์มีปัญหา" },
        { title: "ซ่อมกล้อง", desc: "เปลี่ยนกล้องหน้า กล้องหลัง กล้องเป็นจุดดำ" }
      ]
    },
    portfolio: {
      title: "ผลงานซ่อมล่าสุดของเรา",
      subtitle: "ซ่อมตรงจุด หมดปัญหาค่าใช้จ่ายบานปลาย เพราะเราเข้าใจว่ามือถือของคุณ ไม่ใช่แค่มือถือ แต่คือที่เก็บความทรงจำ และข้อมูลที่สำคัญของคุณ",
      items: [
        { id: 1, title: "เปลี่ยนหน้าจอ iPhone 11", desc: "จอเสีย เปลี่ยนใหม่ พร้อมประกัน", images: ["/portfolio/job1_1.jpg", "/portfolio/job1_2.jpg"] },
        { id: 2, title: "เปลี่ยนแบตฯ iPhone 14", desc: "แบตเสื่อมก็แค่เปลี่ยนใหม่ สุขภาพแบต 100% ใช้งานต่อได้ยาวๆ", images: ["/portfolio/job2_1.jpg", "/portfolio/job2_2.jpg"] },
        { id: 3, title: "ซ่อมบอร์ด iPhone XS Max", desc: "เครื่องดับเปิดไม่ติด เครื่องมีอาการร้อน", img: "/portfolio/job3.jpg" },
        { id: 4, title: "ซ่อมรูชาร์จ Type-C", desc: "ชาร์จเข้าบ้างไม่เข้าบ้าง เปลี่ยนตูดชาร์จใหม่แน่นๆ", img: "/portfolio/job4.jpg" },
        { id: 5, title: "ปลดล็อกรหัส Samsung A14", desc: "ลืมรหัสหน้าจอ ไม่ได้ใช้เครื่องนาน", img: "/portfolio/job5.jpg" },
        { id: 6, title: "บายพาสไอคลาวด์ iPad Gen 7", desc: "ลืมรหัสหน้าจอ ลืม iCloud ปลดได้ครับ", images: ["/portfolio/job6_1.jpg", "/portfolio/job6_2.jpg"] },
        { id: 7, title: "ย้ายข้อมูล", desc: "ย้ายข้อมูลจากเครื่องเก่าไปเครื่องใหม่", img: "/portfolio/job7.jpg" },
        { id: 8, title: "ซ่อม iPhone 12 ตกน้ำ", desc: "ล้างบอร์ดและชิ้นส่วนต่างๆ เปลี่ยนจอและลำโพงสนทนาที่เสียให้กลับมาใช้งานได้ปกติ", img: "/portfolio/job8.jpg" },
        { id: 9, title: "ซ่อมจอขาว iPhone 13promax", desc: "อาการประจำรุ่นจอขาว-จอเขียว ใน iPhone 13promax", images: ["/portfolio/job9_1.jpg", "/portfolio/job9_2.jpg"] }
      ]
    },
    articles: {
      title: "บทความและทริคดีๆ สำหรับมือถือคุณ",
      subtitle: "เทคนิคการดูแลรักษาโทรศัพท์มือถือยืดอายุการใช้งาน โดยช่างผู้เชี่ยวชาญ",
      readMore: "อ่านต่อ",
      backBtn: "กลับไปหน้าหลัก",
      items: [
        {
          id: 1,
          title: "มือถือตกน้ำ! สิ่งที่ควรทำและห้ามทำเด็ดขาด ภายใน 5 นาทีแรก",
          date: "12 ตุลาคม 2023",
          content: "เมื่อโทรศัพท์โดนน้ำ ห้ามนำไปแช่ถังข้าวสารเด็ดขาด! ให้รีบปิดเครื่อง นำผ้าแห้งเช็ดภายนอก และ... (เนื้อหาฉบับเต็มรอการอัปเดต)"
        },
        {
          id: 2,
          title: "วิธีเช็คเปอร์เซ็นต์แบตเตอรี่ ว่าถึงเวลาเปลี่ยนแล้วหรือยัง?",
          date: "5 พฤศจิกายน 2023",
          content: "แบตเตอรี่ที่ดีควรมีความจุสูงสุดไม่ต่ำกว่า 80% หากแบตมือถือเริ่มลดพรวดพลาด หรือชาร์จไม่เข้า... (เนื้อหาฉบับเต็มรอการอัปเดต)"
        }
      ]
    },
    contact: {
      title: "ช่องทางการติดต่อ",
      subtitle: "ยินดีให้คำปรึกษาฟรี สอบถามราคาประเมินก่อนซ่อมได้เลยครับ",
      phone: "เบอร์โทรศัพท์",
      line: "Line",
      lineLink: "คลิกเพิ่มเพื่อน",
      whatsapp: "WhatsApp",
      facebook: "Facebook Page",
      map: "พิกัดร้าน",
      mapLabel: 'ค้นหา "แมวส้มซ่อมมือถือ" บน Google Maps',
      fbName: "แมวส้ม ซ่อมมือถือ"
    },
    footer: "แมวส้มซ่อมมือถือ - สงวนลิขสิทธิ์ตามกฎหมาย."
  },
  en: {
    nav: {
      home: "Home",
      features: "Why Us",
      services: "Services",
      portfolio: "Portfolio",
      articles: "Tips & Blog",
      contact: "Contact",
      langSwitch: "TH"
    },
    hero: {
      title: "Your Best Friend for Mobile Repair",
      subtitle: "Orange Cat PhoneFix. We fix all phone issues with friendly local prices from professional technicians, packed with high quality and top warranty.",
      callBtn: "Call Us Now",
      serviceBtn: "Our Services"
    },
    features: {
      title: "Why Choose Us?",
      subtitle: "A trusted local shop serving you with sincerity at affordable prices.",
      card1: {
        title: "Friendly Prices",
        desc: "Accurate fixes, clear estimates, no hidden charges. We solve your problems within your budget."
      },
      card2: {
        title: "High Quality Repair",
        desc: "Using premium parts and repaired by expert technicians who care about every detail."
      },
      card3: {
        title: "Excellent Warranty",
        desc: "We are confident in our work, providing post-repair warranty for your peace of mind."
      }
    },
    services: {
      title: "Comprehensive Services",
      subtitle: "We fix everything from cracked screens to dead batteries and motherboard issues.",
      items: [
        { title: "Screen Replacement", desc: "Cracked display, touch issues" },
        { title: "Battery Replacement", desc: "Draining fast, won't charge, swollen battery" },
        { title: "Motherboard Repair", desc: "Dead phone, water damage, dropping, boot loop" },
        { title: "Charging Port Repair", desc: "Won't charge, loose connection, broken port" },
        { title: "Speaker / Microphone", desc: "No sound, crackling speaker, callers can't hear you" },
        { title: "Water Damage Recovery", desc: "board cleaning, moisture baking, logic board repair" },
        { title: "Button Repair", desc: "Power button broken, volume buttons stuck" },
        { title: "Unlock / Software", desc: "Screen passcode lock, SIM network lock, software issues" },
        { title: "Camera Repair", desc: "Front camera, rear camera, and lens replacement" }
      ]
    },
    portfolio: {
      title: "Our Recent Repairs",
      subtitle: "We have rescued thousands of devices. Here are some of our proud works.",
      items: [
        { id: 1, title: "iPhone 11 Screen Replacement", desc: "Cracked screen replaced with new display and warranty.", images: ["/portfolio/job1_1.jpg", "/portfolio/job1_2.jpg"] },
        { id: 2, title: "iPhone 14 Battery Replacement", desc: "Degraded battery replaced. 100% Battery Health, ready for long use.", images: ["/portfolio/job2_1.jpg", "/portfolio/job2_2.jpg"] },
        { id: 3, title: "iPhone XS Max Motherboard Repair", desc: "Dead device, wouldn't turn on, overheating issues resolved.", img: "/portfolio/job3.jpg" },
        { id: 4, title: "Type-C Charging Port Repair", desc: "Intermittent charging fixed with a brand new charging port.", img: "/portfolio/job4.jpg" },
        { id: 5, title: "Samsung A14 Passcode Unlock", desc: "Forgot screen passcode after not using the device for a long time.", img: "/portfolio/job5.jpg" },
        { id: 6, title: "iPad Gen 7 iCloud Bypass", desc: "Forgot screen passcode and iCloud password. Unlocked successfully.", images: ["/portfolio/job6_1.jpg", "/portfolio/job6_2.jpg"] },
        { id: 7, title: "Data Transfer", desc: "Transfer data safely from an old device to a new one.", img: "/portfolio/job7.jpg" },
        { id: 8, title: "iPhone 12 Water Damage", desc: "Cleaned logic board and components. Replaced damaged screen and earpiece speaker. Working perfectly.", img: "/portfolio/job8.jpg" },
        { id: 9, title: "iPhone 13 Pro Max White Screen", desc: "Fixed common white/green screen issue for iPhone 13 Pro Max.", images: ["/portfolio/job9_1.jpg", "/portfolio/job9_2.jpg"] }
      ]
    },
    articles: {
      title: "Useful Mobile Tips & Tricks",
      subtitle: "Extend the life of your device with expert tips from our technicians.",
      readMore: "Read More",
      backBtn: "Back to Home",
      items: [
        {
          id: 1,
          title: "Phone dropped in water! Do's and Don'ts in the first 5 mins",
          date: "October 12, 2023",
          content: "Do not put it in rice! Turn it off immediately, dry the exterior, and... (Full content coming soon)"
        },
        {
          id: 2,
          title: "How to check if it's time to replace your phone battery?",
          date: "November 5, 2023",
          content: "If your maximum capacity drops below 80% or if you notice sudden jumps in percentage... (Full content coming soon)"
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Free consultations! Feel free to ask for estimated prices before repairing.",
      phone: "Phone Number",
      line: "Line ID",
      lineLink: "Add Friend",
      whatsapp: "WhatsApp",
      facebook: "Facebook Page",
      map: "Location",
      mapLabel: 'Find "Orange Cat PhoneFix" on Google Maps',
      fbName: "Orange Cat PhoneFix"
    },
    footer: "Orange Cat PhoneFix - All Rights Reserved"
  }
};
