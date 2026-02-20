const translations = {
    en: {
        // Navigation
        nav_globe: "Globe",
        nav_calendar: "Calendar",
        nav_teams: "Teams",
        nav_regulations: "Regulations",
        nav_predictions: "Predictions",

        // Globals & Tooltips
        tt_round: "Round",
        tt_sprint: "Sprint Weekend",

        // Hero
        hero_eyebrow: "The 2026 FIA Formula One World Championship",
        hero_headline: "WORLD<br />TOUR",
        hero_races: "24 Races",
        hero_countries: "21 Countries",
        hero_continents: "5 Continents",
        hero_scroll: "Scroll",

        // Calendar Section
        sec_calendar_title: "Race Calendar",
        sec_calendar_intro: "24 Grands Prix across five continents. The season opens in Melbourne on 8 March and concludes at Yas Marina on 6 December. Six rounds feature the Sprint format including China, Miami, Canada, Great Britain, Netherlands, and Singapore.",
        cal_btn_circuit: "Circuit Map",

        // Teams Section
        sec_teams_title: "Teams & Drivers",
        sec_teams_intro: "Eleven constructors take the grid for the first time since 2016. Audi and Cadillac join as new manufacturers, while Honda, Ford, and Audi bring entirely new power unit programmes to the most comprehensive regulation overhaul in the sport's history.",
        teams_banner_strong: "2026 Technical Regulations: New Era",
        teams_banner_p: "All-new power units, active aerodynamics and chassis rules. Three new engine manufacturers: Honda (Aston Martin), Ford/RBPT (Red Bull & Racing Bulls), and Audi. 100% sustainable fuel mandatory. DRS replaced by Overtake Mode and Active Aero.",
        team_chassis: "Chassis",
        team_engine: "Power Unit",
        team_principal: "Team Principal",

        // Regulations Section
        sec_reg_title: "2026 Regulations",
        sec_reg_intro: "The 2026 season marks the dawn of a \"Nimbly Car\" philosophy, with machines that are lighter, smaller, and more efficient. A radical shift in power unit logic and aerodynamics aims to create the closest racing in history.",
        reg_aero_title: "Active Aerodynamics",
        reg_aero_p: "DRS is replaced by a dual-mode active aero system. Rear and front wings adjust dynamically to balance straight-line efficiency and cornering grip.",
        reg_aero_li1: "X-MODE: Low Drag / High Speed",
        reg_aero_li2: "Z-MODE: Max Downforce",

        reg_overtake_title: "Overtake Mode",
        reg_overtake_p: "Replacing the binary DRS gap, the \"Manual Override Mode\" grants following drivers additional battery energy deployment to sustain high speeds for longer.",
        reg_overtake_li1: "350kW Surge Capacity",
        reg_overtake_li2: "Strategic Energy Management",

        reg_hybrid_title: "Hybrid 2.0 Power",
        reg_hybrid_p: "The MGU-H is removed. Electrical power leaps from 120kW to 350kW, creating a near 50/50 split between internal combustion and electric energy.",
        reg_hybrid_li1: "100% Sustainable Fuel",
        reg_hybrid_li2: "Triple Energy Recovery",

        // Live Standings
        sec_live_title: "Live 2024 Standings",
        sec_live_intro: "Real-time driver rankings automatically fetched from the Jolpica F1 API. (Showing current season data since 2026 data is not yet available).",
        live_fetching: "Fetching live API data...",

        // Predictions
        sec_pred_title: "2026 Predictions",
        sec_pred_intro: "New regulations historically reshuffle the grid. Mercedes enter as pre-season favourites following strong testing performances from Russell and Antonelli, with McLaren and Red Bull as their closest rivals.",
        pred_drv_title: "Drivers Championship",
        pred_con_title: "Constructors Championship",

        // Footer
        footer_designed: "Designed and developed by",
        footer_copy: "&copy; 2026 Formula One World Championship Limited. F1, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trademarks of Formula One Licensing B.V. All rights reserved.",

        // Countries
        country_Australia: "Australia",
        country_Bahrain: "Bahrain",
        country_China: "China",
        country_Japan: "Japan",
        country_SaudiArabia: "Saudi Arabia",
        country_USA: "USA",
        country_Canada: "Canada",
        country_Monaco: "Monaco",
        country_Spain: "Spain",
        country_Austria: "Austria",
        country_GreatBritain: "Great Britain",
        country_Belgium: "Belgium",
        country_Hungary: "Hungary",
        country_Netherlands: "Netherlands",
        country_Italy: "Italy",
        country_Azerbaijan: "Azerbaijan",
        country_Singapore: "Singapore",
        country_Mexico: "Mexico",
        country_Brazil: "Brazil",
        country_LasVegas: "Las Vegas",
        country_Qatar: "Qatar",
        country_AbuDhabi: "Abu Dhabi",

        // Nationalities
        nat_Monegasque: "Monegasque",
        nat_British: "British",
        nat_Dutch: "Dutch",
        nat_Mexican: "Mexican",
        nat_Thai: "Thai",
        nat_Spanish: "Spanish",
        nat_Canadian: "Canadian",
        nat_French: "French",
        nat_Australian: "Australian",
        nat_Japanese: "Japanese",
        nat_German: "German",
        nat_Danish: "Danish",
        nat_Brazilian: "Brazilian",
        nat_American: "American",
        nat_Argentine: "Argentine",
        nat_Finnish: "Finnish",
        nat_Italian: "Italian",

        // Engines
        "Mercedes Power Unit": "Mercedes Power Unit",
        "Ferrari Power Unit": "Ferrari Power Unit",
        "Renault Power Unit": "Renault Power Unit",
        "Audi Power Unit": "Audi Power Unit",
        "Honda RBPT": "Honda RBPT",
        "Ford / Red Bull RBPT": "Ford / Red Bull RBPT",
        "General Motors PU": "General Motors PU",
        "Ferrari": "Ferrari",
        "Mercedes PU": "Mercedes PU",
        "Audi PU": "Audi PU",
        "RBPT / Ford": "RBPT / Ford",
        "Honda": "Honda",
        // UI Additions
        team_note: "Note",

        // Drivers
        "Lando Norris": "Lando Norris",
        "Oscar Piastri": "Oscar Piastri",
        "George Russell": "George Russell",
        "Kimi Antonelli": "Kimi Antonelli",
        "Charles Leclerc": "Charles Leclerc",
        "Lewis Hamilton": "Lewis Hamilton",
        "Max Verstappen": "Max Verstappen",
        "Isack Hadjar": "Isack Hadjar",
        "Alexander Albon": "Alexander Albon",
        "Carlos Sainz": "Carlos Sainz",
        "Fernando Alonso": "Fernando Alonso",
        "Lance Stroll": "Lance Stroll",
        "Liam Lawson": "Liam Lawson",
        "Arvid Lindblad": "Arvid Lindblad",
        "Esteban Ocon": "Esteban Ocon",
        "Oliver Bearman": "Oliver Bearman",
        "Nico Hulkenberg": "Nico Hulkenberg",
        "Gabriel Bortoleto": "Gabriel Bortoleto",
        "Pierre Gasly": "Pierre Gasly",
        "Franco Colapinto": "Franco Colapinto",
        "Sergio Perez": "Sergio Perez",
        "Valtteri Bottas": "Valtteri Bottas",

        // Teams
        "McLaren": "McLaren",
        "Mercedes-AMG": "Mercedes-AMG",
        "Ferrari": "Ferrari",
        "Red Bull": "Red Bull",
        "Red Bull Racing": "Red Bull Racing",
        "Williams": "Williams",
        "Aston Martin": "Aston Martin",
        "Racing Bulls": "Racing Bulls",
        "Haas": "Haas",
        "Audi": "Audi",
        "Alpine": "Alpine",
        "Cadillac": "Cadillac",

        // Principals
        "Andrea Stella": "Andrea Stella",
        "Toto Wolff": "Toto Wolff",
        "Frederic Vasseur": "Frederic Vasseur",
        "Laurent Mekies": "Laurent Mekies",
        "James Vowles": "James Vowles",
        "Andy Cowell": "Andy Cowell",
        "Peter Bayer": "Peter Bayer",
        "Ayao Komatsu": "Ayao Komatsu",
        "Mattia Binotto": "Mattia Binotto",
        "Flavio Briatore": "Flavio Briatore",
        "Graeme Lowdon": "Graeme Lowdon",

        // Notes
        "Reigning Champions": "Reigning Champions",
        "Pre-season Favourites": "Pre-season Favourites",
        "Most Titles in History": "Most Titles in History",
        "New Ford Partnership": "New Ford Partnership",
        "Upward Trajectory": "Upward Trajectory",
        "Adrian Newey Era": "Adrian Newey Era",
        "Only Rookie on Grid": "Only Rookie on Grid",
        "Toyota Gazoo Partner": "Toyota Gazoo Partner",
        "New Manufacturer": "New Manufacturer",
        "New Mercedes Engine": "New Mercedes Engine",
        "New 11th Team": "New 11th Team",
        "Pre-season est.": "Pre-season est.",
        "Round": "Round",

        // Circuits/Venues Missing fallback
        "Melbourne": "Melbourne",
        "Albert Park Circuit": "Albert Park Circuit",
        "Miami": "Miami",
        "Montreal": "Montreal",
        "Silverstone": "Silverstone",
        "Spa-Francorchamps": "Spa-Francorchamps",
        "Baku": "Baku",
        "Singapore": "Singapore",
        "Austin, Texas": "Austin, Texas",
        "Mexico City": "Mexico City",
        "Sao Paulo": "Sao Paulo",
        "Las Vegas, NV": "Las Vegas, NV",
        "Losail": "Losail",
        "Yas Island": "Yas Island"
    },
    ko: {
        // Navigation
        nav_globe: "글로브",
        nav_calendar: "캘린더",
        nav_teams: "팀",
        nav_regulations: "규정",
        nav_predictions: "예측",

        // Globals & Tooltips
        tt_round: "라운드",
        tt_sprint: "스프린트 주말",

        // Hero
        hero_eyebrow: "2026 FIA 포뮬러 원 월드 챔피언십",
        hero_headline: "월드<br />투어",
        hero_races: "24개 레이스",
        hero_countries: "21개국",
        hero_continents: "5개 대륙",
        hero_scroll: "스크롤",

        // Calendar Section
        sec_calendar_title: "레이스 캘린더",
        sec_calendar_intro: "5개 대륙에 걸친 24개의 그랑프리. 시즌은 3월 8일 멜버른에서 시작해 12월 6일 야스 마리나에서 끝납니다. 중국, 마이애미, 캐나다, 영국, 네덜란드, 싱가포르를 포함한 6개 라운드가 스프린트 형식으로 열립니다.",
        cal_btn_circuit: "서킷 맵",

        // Teams Section
        sec_teams_title: "팀 및 드라이버",
        sec_teams_intro: "2016년 이후 처음으로 11개의 컨스트럭터가 그리드에 오릅니다. 아우디와 캐딜락이 새로운 제조사로 합류하고, 혼다, 포드, 아우디는 역사상 가장 포괄적인 규정 개편에 맞춰 완전히 새로운 파워 유닛 프로그램을 선보입니다.",
        teams_banner_strong: "2026 기술 규정: 새로운 시대",
        teams_banner_p: "완전히 새로운 파워 유닛, 액티브 에어로다이내믹스 및 섀시 규정. 3개의 새로운 엔진 제조사: 혼다(애스턴 마틴), 포드/RBPT(레드불 & 레이싱불스), 그리고 아우디. 100% 지속 가능한 연료 의무화. DRS가 오버테이크 모드 및 액티브 에어로(대체)됩니다.",
        team_chassis: "섀시",
        team_engine: "파워 유닛",
        team_principal: "팀 대표",

        // Regulations Section
        sec_reg_title: "2026 규정",
        sec_reg_intro: "2026 시즌은 더 가볍고, 더 작고, 더 효율적인 머신을 위한 \"민첩한 차량\" 철학의 시작을 알립니다. 파워 유닛 로직과 공기역학의 급격한 변화는 역사상 가장 치열한 레이싱을 만드는 것을 목표로 합니다.",
        reg_aero_title: "액티브 에어로다이내믹스",
        reg_aero_p: "DRS가 듀얼 모드 액티브 에어로 시스템으로 대체됩니다. 리어 및 프론트 윙이 동적으로 조정되어 직선 속도와 코너링 그립의 균형을 맞춥니다.",
        reg_aero_li1: "X-MODE: 낮은 저항 / 고속",
        reg_aero_li2: "Z-MODE: 최대 다운포스",

        reg_overtake_title: "오버테이크 모드",
        reg_overtake_p: "단순한 DRS 간격을 대체하는 \"수동 오버라이드 모드\"는 뒤따르는 드라이버에게 추가적인 배터리 에너지를 제공하여 오랫동안 고속을 유지할 수 있게 합니다.",
        reg_overtake_li1: "350kW 급증 용량",
        reg_overtake_li2: "전략적 에너지 관리",

        reg_hybrid_title: "하이브리드 2.0 파워",
        reg_hybrid_p: "MGU-H가 분리됩니다. 전기 출력이 120kW에서 350kW로 도약하여 내연 기관과 전기 에너지 사이의 약 50대 50 분할을 만듭니다.",
        reg_hybrid_li1: "100% 지속 가능한 연료",
        reg_hybrid_li2: "트리플 에너지 회수",

        // Live Standings
        sec_live_title: "실시간 2024 순위",
        sec_live_intro: "Jolpica F1 API에서 자동으로 가져온 실시간 드라이버 순위입니다. (2026년 데이터는 아직 사용할 수 없으므로 현재 시즌 데이터가 표시됩니다).",
        live_fetching: "실시간 API 데이터를 가져오는 중...",

        // Predictions
        sec_pred_title: "2026 예측",
        sec_pred_intro: "새로운 규정은 역사적으로 그리드를 재편합니다. 메르세데스는 러셀과 안토넬리의 강력한 테스트 퍼포먼스에 힘입어 프리 시즌 우승 후보로 진입하며, 맥라렌과 레드불이 가장 가까운 라이벌이 될 것입니다.",
        pred_drv_title: "드라이버 챔피언십",
        pred_con_title: "컨스트럭터 챔피언십",

        // Footer
        footer_designed: "디자인 및 개발:",
        footer_copy: "&copy; 2026 Formula One World Championship Limited. F1, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX 관련 상표는 Formula One Licensing B.V.의 상표입니다. 모든 권리 보유.",

        // Countries
        country_Australia: "호주",
        country_Bahrain: "바레인",
        country_China: "중국",
        country_Japan: "일본",
        country_SaudiArabia: "사우디아라비아",
        country_USA: "미국",
        country_Canada: "캐나다",
        country_Monaco: "모나코",
        country_Spain: "스페인",
        country_Austria: "오스트리아",
        country_GreatBritain: "영국",
        country_Belgium: "벨기에",
        country_Hungary: "헝가리",
        country_Netherlands: "네덜란드",
        country_Italy: "이탈리아",
        country_Azerbaijan: "아제르바이잔",
        country_Singapore: "싱가포르",
        country_Mexico: "멕시코",
        country_Brazil: "브라질",
        country_LasVegas: "라스베이거스",
        country_Qatar: "카타르",
        country_AbuDhabi: "아부다비",

        // Nationalities
        nat_Monegasque: "모나코인",
        nat_British: "영국인",
        nat_Dutch: "네덜란드인",
        nat_Mexican: "멕시코인",
        nat_Thai: "태국인",
        nat_Spanish: "스페인인",
        nat_Canadian: "캐나다인",
        nat_French: "프랑스인",
        nat_Australian: "호주인",
        nat_Japanese: "일본인",
        nat_German: "독일인",
        nat_Danish: "덴마크인",
        nat_Brazilian: "브라질인",
        nat_American: "미국인",
        nat_Argentine: "아르헨티나인",
        nat_Finnish: "핀란드인",
        nat_Italian: "이탈리아인",

        // Engines
        "Mercedes Power Unit": "메르세데스 파워 유닛",
        "Ferrari Power Unit": "페라리 파워 유닛",
        "Renault Power Unit": "르노 파워 유닛",
        "Audi Power Unit": "아우디 파워 유닛",
        "Honda RBPT": "혼다 RBPT",
        "Ford / Red Bull RBPT": "포드 / 레드불 RBPT",
        "General Motors PU": "제너럴 모터스 PU",
        "Ferrari": "페라리",
        "Mercedes PU": "메르세데스 PU",
        "Audi PU": "아우디 PU",
        "RBPT / Ford": "RBPT / 포드",
        "Honda": "혼다",

        // UI Additions
        team_note: "노트",

        // Drivers
        "Lando Norris": "랜도 노리스",
        "Oscar Piastri": "오스카 피아스트리",
        "George Russell": "조지 러셀",
        "Kimi Antonelli": "키미 안토넬리",
        "Charles Leclerc": "샤를 르클레르",
        "Lewis Hamilton": "루이스 해밀턴",
        "Max Verstappen": "막스 베르스타펜",
        "Isack Hadjar": "이삭 하자르",
        "Alexander Albon": "알렉산더 알본",
        "Carlos Sainz": "카를로스 사인츠",
        "Fernando Alonso": "페르난도 알론소",
        "Lance Stroll": "랜스 스트롤",
        "Liam Lawson": "리암 로슨",
        "Arvid Lindblad": "아비드 린드블라드",
        "Esteban Ocon": "에스테반 오콘",
        "Oliver Bearman": "올리버 베어맨",
        "Nico Hulkenberg": "니코 휠켄베르크",
        "Gabriel Bortoleto": "가브리엘 보르톨레토",
        "Pierre Gasly": "피에르 가슬리",
        "Franco Colapinto": "프랑코 콜라핀토",
        "Sergio Perez": "세르히오 페레즈",
        "Valtteri Bottas": "발테리 보타스",

        // Teams
        "McLaren": "맥라렌",
        "Mercedes-AMG": "메르세데스-AMG",
        "Ferrari": "페라리",
        "Red Bull": "레드불",
        "Red Bull Racing": "레드불 레이싱",
        "Williams": "윌리엄스",
        "Aston Martin": "애스턴 마틴",
        "Racing Bulls": "레이싱 불스",
        "Haas": "하스",
        "Audi": "아우디",
        "Alpine": "알핀",
        "Cadillac": "캐딜락",

        // Principals
        "Andrea Stella": "안드레아 스텔라",
        "Toto Wolff": "토토 울프",
        "Frederic Vasseur": "프레데릭 바수르",
        "Laurent Mekies": "로랑 메키스",
        "James Vowles": "제임스 볼스",
        "Andy Cowell": "앤디 카웰",
        "Peter Bayer": "피터 바이에르",
        "Ayao Komatsu": "코마츠 아야오",
        "Mattia Binotto": "마티아 비노토",
        "Flavio Briatore": "플라비오 브리아토레",
        "Graeme Lowdon": "그레이엄 로던",

        // Notes
        "Reigning Champions": "디펜딩 챔피언",
        "Pre-season Favourites": "프리 시즌 우승 후보",
        "Most Titles in History": "역대 최다 우승",
        "New Ford Partnership": "새로운 포드 파트너십",
        "Upward Trajectory": "상승세",
        "Adrian Newey Era": "애드리언 뉴이 시대",
        "Only Rookie on Grid": "그리드 유일의 루키",
        "Toyota Gazoo Partner": "토요타 가주 파트너",
        "New Manufacturer": "새로운 제조사",
        "New Mercedes Engine": "새로운 메르세데스 엔진",
        "New 11th Team": "새로운 11번째 팀",
        "Pre-season est.": "프리 시즌 예상",
        "Round": "라운드",

        // Circuits/Venues Missing fallback
        "Melbourne": "멜버른",
        "Albert Park Circuit": "앨버트 파크 서킷",
        "Miami": "마이애미",
        "Montreal": "몬트리올",
        "Silverstone": "실버스톤",
        "Spa-Francorchamps": "스파-프랑코샹",
        "Baku": "바쿠",
        "Singapore": "싱가포르",
        "Austin, Texas": "오스틴, 텍사스",
        "Mexico City": "멕시코 시티",
        "Sao Paulo": "상파울루",
        "Las Vegas, NV": "라스베이거스, 네바다",
        "Losail": "루사일",
        "Yas Island": "야스 아일랜드"
    }
};

let currentLang = localStorage.getItem("f1_lang") || "en";

function setLanguage(lang) {
    if (lang !== "en" && lang !== "ko") lang = "en";
    currentLang = lang;
    localStorage.setItem("f1_lang", lang);

    document.body.classList.add("lang-transition");

    setTimeout(() => {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const translation = translations[lang][key];
            if (translation !== undefined) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.value = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        if (typeof window.reRenderAll === "function") {
            window.reRenderAll();
        }

        const toggleBtn = document.getElementById("lang-toggle");
        if (toggleBtn) {
            toggleBtn.textContent = lang === "en" ? "KR" : "EN";
        }

        setTimeout(() => {
            document.body.classList.remove("lang-transition");
        }, 50);
    }, 300);
}

function t(key) {
    return translations[currentLang][key] || key;
}

function toggleLanguage() {
    const newLang = currentLang === "en" ? "ko" : "en";
    setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", () => {
    if (currentLang !== "en") {
        // Need a slight delay to ensure other DOM loads maybe?
        // the core data might render instantly, but it's okay because reRenderAll works
        setTimeout(() => {
            setLanguage(currentLang);
        }, 0);
    }
});
