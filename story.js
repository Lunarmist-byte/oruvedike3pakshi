/**
 * Scraphack 2026 Story Page — Cinematic Movie Experience
 * Full 10-Chapter Documentary with Malayalam/English Translation & Movie Auto-Scroll
 */

(function () {
  'use strict';

  // ==========================================================================
  // Complete 10-Chapter Scraphack Documentary Data
  // ==========================================================================
  const STORY_DATA = {
    ml: {
      headline: "TinkerHub സംഘടിപ്പിച്ച Scraphack",
      subheadline: "കേടായ ക്ലോക്കുകളുടെയും ആക്രിക്കടകളുടെയും കഥ · ഒരു റിവേഴ്സ് ഹാക്കത്തോൺ അനുഭവം",
      langLabel: "English-ലേക്ക് മാറ്റുക",
      navLangText: "ENGLISH",
      creditsTitle: "THE END // ശുഭം",
      scenes: [
        {
          badge: "Scene 01 · Origin",
          title: "Tinker Hub organised Scraphack",
          image: "", // Add image src here (e.g. "images/scene-01.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "കൊല്ലവർഷം 2026-ൽ TinkerHub ഒരു പരിപാടി സംഘടിപ്പിച്ചു — Scraphack. ഉപേക്ഷിക്കപ്പെട്ട ഇലക്ട്രോണിക് ഉപകരണങ്ങൾ പരിശോധിച്ച്, അവയിൽ നിന്ന് ഉപയോഗപ്രദമായ ഘടകങ്ങൾ കണ്ടെത്തി, അവ ഉപയോഗിച്ച് പുതിയ എന്തെങ്കിലും നിർമ്മിക്കാൻ പങ്കാളികളെ വെല്ലുവിളിക്കുന്ന ഒരു ഹാർഡ്വെയർ ഹാക്കത്തോണാണ് Scraphack.",
            "സാധാരണ ഹാക്കത്തോണുകളിൽ ഒരു ആശയം കണ്ടെത്തിയശേഷം അതിനാവശ്യമായ ഘടകങ്ങൾ ശേഖരിക്കുകയാണ് ചെയ്യുന്നതെങ്കിൽ, Scraphack-ൽ ഈ പ്രക്രിയ നേരെ തിരിച്ചാണ്. ആദ്യം ലഭ്യമായ ഉപകരണങ്ങൾ പരിശോധിക്കുകയും അവയിൽ നിന്ന് എന്ത് നിർമ്മിക്കാമെന്ന് കണ്ടെത്തുകയുമാണ് ചെയ്യുന്നത്.",
            "അമലും കോർ ടീം അംഗങ്ങളായ നവനീതും ശിവകാമിയും പരിപാടിയിൽ രജിസ്റ്റർ ചെയ്യാൻ തീരുമാനിച്ചു. എന്നാൽ നിർഭാഗ്യവശാൽ, Christy-യുടെ കോർ ടീമിലുള്ള മറ്റുള്ളവർക്ക് പരീക്ഷയുണ്ടായിരുന്നതിനാൽ Christy-ക്ക് മാത്രമേ രജിസ്റ്റർ ചെയ്യാൻ സാധിച്ചുള്ളൂ. പിന്നീട് ടീം രൂപീകരിച്ചപ്പോൾ ഇവരെല്ലാവരും ചേർന്ന് ഒരു ടീമായി."
          ]
        },
        {
          badge: "Scene 02 · Strategy",
          title: "Planning calls (പ്ലാനിങ് കോളുകൾ)",
          image: "", // Add image src here (e.g. "images/scene-02.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "കേരളത്തിന്റെ നാല് കോണുകളിലായി ഇരുന്നുകൊണ്ട് നാലുപേരും ഗ്രൂപ്പ് കോളിലൂടെ ആശയങ്ങൾ ചർച്ച ചെയ്തു. അമൽ ആക്രിക്കടയിൽ നിന്ന് കിട്ടുന്ന സാധനങ്ങൾ ഉപയോഗിച്ച് Elon Musk-ന്റെ പറക്കും കാറിനെയും Tony Stark-ന്റെ സ്യൂട്ടിനെയും വെല്ലുന്ന ഒരു പ്രോജക്ട് നിർമ്മിക്കാനുള്ള പ്ലാനിട്ടു.",
            "ഇത് കേട്ട ബാക്കിയുള്ള മൂന്നുപേരുടെയും കിളി പോയി! അവസാനം വീട്ടിലുള്ള TV, Fan, Fridge തുടങ്ങിയ സാധനങ്ങൾ ഉപയോഗിച്ച് എന്തെങ്കിലും ചെയ്യാമെന്ന് തീരുമാനിച്ചു. അങ്ങനെ ചർച്ചകൾ മുന്നോട്ട് പോയി. ഒടുവിൽ അവരുടെ ശ്രദ്ധ ഒരു ക്ലോക്കിൽ എത്തിച്ചേർന്നു. ആ ക്ലോക്കിൽ എന്തെങ്കിലും വ്യത്യസ്തമായി ചെയ്യാമെന്ന് തീരുമാനിച്ചപ്പോഴാണ് ഒരു ആശയം തെളിഞ്ഞുവന്നത്."
          ]
        },
        {
          badge: "Scene 03 · Blueprint",
          title: "The Idea (ആശയം)",
          image: "", // Add image src here (e.g. "images/scene-03.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "കേടായ ഒരു ക്ലോക്ക് മോട്ടോർ ഉപയോഗിച്ച് പ്രവർത്തിപ്പിച്ച് നന്നാക്കുക. അതിനുശേഷം TV റിമോട്ട് ഉപയോഗിച്ച് ക്ലോക്ക് നിയന്ത്രിക്കാനുള്ള സംവിധാനം ഒരുക്കുക. റിമോട്ടിലെ ഓരോ രാജ്യത്തിന്റെയും ബട്ടൺ അമർത്തുമ്പോൾ ആ രാജ്യത്തെ സമയം ക്ലോക്കിൽ കാണിക്കുന്ന രീതിയിലായിരുന്നു പദ്ധതി.",
            "കൂടാതെ, റിമോട്ടിലെ വോയ്സ് ബട്ടൺ ഉപയോഗിച്ച് ഒരു രാജ്യത്തിന്റെ പേര് പറഞ്ഞാൽ ആ രാജ്യത്തെ സമയം ക്ലോക്കിൽ കാണിക്കാൻ കഴിയുന്ന രീതിയിലും സംവിധാനം ഒരുക്കാൻ തീരുമാനിച്ചു."
          ]
        },
        {
          badge: "Scene 04 · Day One",
          title: "Hackathon day (ഹാക്കത്തോൺ ദിനം)",
          image: "", // Add image src here (e.g. "images/scene-04.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "രാവിലെ 9:30 ആയപ്പോഴേക്കും അമലും കോർ ടീം അംഗങ്ങളും Tinker Space-ൽ എത്തിച്ചേർന്നു. എത്തിയ ഉടനെ തന്നെ അടുത്തുള്ള ആക്രിക്കട തിരഞ്ഞുപിടിക്കാൻ ഇറങ്ങി. പക്ഷേ, അവർക്ക് ആദ്യം കണ്ടെത്താനായത് പ്രതീക്ഷിച്ച തരത്തിലുള്ള കടയായിരുന്നില്ല. ആദ്യമായി കണ്ട ആക്രിക്കടയിൽ ലോഹങ്ങളായിരുന്നു കൂടുതലും.",
            "അങ്ങനെ ഒരു ഷേക്ക് കുടിച്ചും ബിരിയാണി കഴിച്ചും സമയം ചെലവഴിച്ചപ്പോഴേക്കും ഏകദേശം 1:30 ആയി. അപ്പോഴാണ് Christy-യും ബാക്കിയുള്ളവരും എത്തിച്ചേർന്നത്."
          ]
        },
        {
          badge: "Scene 05 · The Scrap Hunt",
          title: "Visit Aakrikada (ആക്രിക്കട സന്ദർശനം)",
          image: "", // Add image src here (e.g. "images/scene-05.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "എല്ലാവരും എത്തിയശേഷം ഒരുമിച്ച് അടുത്തുള്ള ആക്രിക്കടയിലേക്ക് പോയി. അവിടെ കുറേനേരം ഉപേക്ഷിക്കപ്പെട്ട സാധനങ്ങൾക്കിടയിൽ ഉപയോഗപ്രദമായ ഇലക്ട്രോണിക് ഘടകങ്ങൾ തിരഞ്ഞു.",
            "അവിടെ ധാരാളം കേടായ ഇലക്ട്രോണിക് ഉപകരണങ്ങളുണ്ടായിരുന്നു. ഓരോരുത്തരും അവർക്കാവശ്യമായ സാധനങ്ങൾ തിരഞ്ഞെടുത്തു. ഒടുവിൽ ഞങ്ങൾ ഒരു കേടായ Bluetooth സ്പീക്കർ കണ്ടെത്തി.",
            "അപ്പോഴേക്കും ഫെബിന്റെ കോൾ വന്നു. അതോടെ എല്ലാവരും പെട്ടെന്ന് Tinker Space-ലേക്ക് ഓടിയെത്തി."
          ]
        },
        {
          badge: "Scene 06 · Execution",
          title: "Initial plan (ആദ്യ പ്ലാൻ)",
          image: "", // Add image src here (e.g. "images/scene-06.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "ഒരു വശത്ത് റിമോട്ട് പൊളിച്ച് അതിനെ റീപ്രോഗ്രാം ചെയ്യാനുള്ള ശ്രമം തുടങ്ങി. മറുവശത്ത് സെർവോ മോട്ടോറും ഗിയറും ഉപയോഗിച്ച് ക്ലോക്ക് നിയന്ത്രിക്കാനുള്ള ശ്രമവും നടന്നു.",
            "നമ്മുടെ ഇനിഷ്യൽ പ്ലാൻ റിമോട്ടിന്റെ IR വെച്ചിട്ട് കൺട്രോൾ ചെയ്യാമെന്നായിരുന്നു. എന്നാൽ IR സെൻസർ വർക്കാവാതിരുന്നതോടെ പ്ലാനിൽ മാറ്റം വരുത്തി — ഒരു വെബ് ഇന്റർഫേസ് വെച്ച് മോണിറ്റർ ചെയ്യാനും കൺട്രോൾ ചെയ്യാനുമായി തീരുമാനിച്ചു!"
          ]
        },
        {
          badge: "Scene 07 · The Struggle",
          title: "Failures (പരാജയങ്ങളും തിരിച്ചടികളും)",
          image: "", // Add image src here (e.g. "images/scene-07.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "ആദ്യമായി ഉപയോഗിക്കാൻ ശ്രമിച്ചത് SG90 മൈക്രോ സെർവോ മോട്ടോറായിരുന്നു. എന്നാൽ അതിന് 180 ഡിഗ്രി മാത്രമേ തിരിയാൻ കഴിയുമായിരുന്നുള്ളൂ. ക്ലോക്ക് നിയന്ത്രിക്കാൻ 360 ഡിഗ്രി തുടർച്ചയായി കറങ്ങുന്ന മോട്ടോർ ആവശ്യമായിരുന്നു.",
            "അതുകൊണ്ട് SG90 മൈക്രോ സെർവോ മോട്ടോർ മോഡിഫൈ ചെയ്യാൻ ശ്രമിച്ചു. പക്ഷേ ആ പദ്ധതി പരാജയപ്പെട്ടു.",
            "തുടർന്ന് 5V സ്റ്റെപ്പർ മോട്ടോറിലേക്ക് മാറാൻ ശ്രമിച്ചു. എന്നാൽ അതിനനുയോജ്യമായ മോട്ടോർ ഡ്രൈവർ ലഭിച്ചില്ല. പിന്നീട് 12V സ്റ്റെപ്പർ മോട്ടോർ ഉപയോഗിക്കാൻ തീരുമാനിച്ചു. അതിനായി രണ്ട് മോട്ടോർ ഡ്രൈവറുകൾ എടുത്തു. ഏകദേശം 12 ജമ്പർ വയറുകൾ ആവശ്യമായി വന്നെങ്കിലും അതും പ്രവർത്തിച്ചില്ല.",
            "ഒന്നിലധികം സ്റ്റെപ്പർ മോട്ടോർ ഡ്രൈവറുകൾ പരീക്ഷിച്ചശേഷമാണ് പ്രശ്നം മോട്ടോർ ഡ്രൈവറിലല്ലെന്ന് മനസ്സിലായത്. മോട്ടോർ തന്നെ കേടായിരുന്നു!",
            "അതോടെ പ്രതീക്ഷകൾ ഏതാണ്ട് അസ്തമിച്ചു. എന്നാൽ കുറച്ചുസമയം കഴിഞ്ഞപ്പോൾ കൊണ്ടുവന്ന ഘടകങ്ങൾക്കിടയിൽ ഈ പ്രോജക്ടിന് അനുയോജ്യമായ ഒരു മോട്ടോറും മോട്ടോർ ഡ്രൈവറും ഉണ്ടെന്ന് കണ്ടെത്തി. അവ ഉപയോഗിച്ച് ഒടുവിൽ സംവിധാനം പ്രവർത്തിപ്പിക്കാൻ സാധിച്ചു."
          ]
        },
        {
          badge: "Scene 08 · Side Quests",
          title: "Side Quest (സൈഡ് ക്വസ്റ്റ്)",
          image: "", // Add image src here (e.g. "images/scene-08.jpg" or URL)
          imageCaption: "",
          sideQuests: [
            {
              title: "Absolute Torch",
              desc: "വീട്ടിൽ നിന്ന് ഒരു കേടായ ടോർച്ച് കൊണ്ടുവന്നിരുന്നു. സ്റ്റെപ്പർ മോട്ടോർ ലഭിക്കാനായി കാത്തിരുന്ന സമയത്ത് Christy ടോർച്ചിന്റെ LED മാറ്റി പകരം ഒരു RGB LED മൊഡ്യൂൾ ഘടിപ്പിച്ചു. അത് ESP32-യുമായി കണക്ട് ചെയ്തു. തുടർന്ന് ക്യാപ്റ്റീവ് പോർട്ടൽ ഉപയോഗിച്ച് ഫോണിൽ നിന്ന് ലൈറ്റ് നിയന്ത്രിക്കാൻ കഴിയുന്ന സംവിധാനം ഒരുക്കി. അങ്ങനെ ഒടുവിൽ നിറങ്ങൾ മാറ്റാൻ കഴിയുന്ന ഒരു ടോർച്ച് നിർമ്മിച്ചു — Absolute Torch!",
              github: "https://github.com/christy-basil-anil/absolute-torch/blob/main/absolute_torch.ino"
            },
            {
              title: "Absolute Violin",
              desc: "ആക്രിക്കടയിൽ നിന്ന് കിട്ടിയ Bluetooth സ്പീക്കർ നവനീത് നന്നാക്കിയെടുത്തു. അതിനിടെ, ബിൽഡർ ഇൻവെസ്റ്റ്മെന്റിനായി ബാക്കിവെച്ചിരുന്ന ഒരു ഗിയർ അമലിന് ലഭിച്ചു. അമൽ അതിൽ ഒരു പൊട്ടൻഷിയോമീറ്റർ കൂടി ഘടിപ്പിച്ച് അതിനെ ഒരു വയലിൻ ആക്കി മാറ്റാൻ ശ്രമിച്ചു. അങ്ങനെ മറ്റൊരു പരീക്ഷണവും പിറന്നു — Absolute Violin!",
              github: "https://github.com/Lunarmist-byte/absoluteviolin"
            }
          ]
        },
        {
          badge: "Scene 09 · Relief",
          title: "Chaya Break (ചായ ബ്രേക്ക്)",
          image: "", // Add image src here (e.g. "images/scene-09.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "നിരന്തരമായ പരീക്ഷണങ്ങളും പരാജയങ്ങളും തലക്ക് ഭ്രാന്തുപിടിപ്പിച്ചുതുടങ്ങിയപ്പോൾ എല്ലാവരും ഒരു ചായ കുടിക്കാനായി ഇറങ്ങി."
          ]
        },
        {
          badge: "Scene 10 · The Miracle Fix",
          title: "Breaking Clocks (ഒടിഞ്ഞ ക്ലോക്ക്)",
          image: "", // Add primary image src here (e.g. "images/scene-10.jpg" or URL)
          imageCaption: "",
          carouselImages: [
            // Add multiple photo URLs or relative paths for Final Scene Carousel here:
            // e.g. "images/final-clock-1.jpg", "images/final-clock-2.jpg"
          ],
          paragraphs: [
            "പരീക്ഷണങ്ങൾക്കിടയിൽ ഒരു കൈയബദ്ധത്തിൽ ക്ലോക്കിന്റെ സൂചി ഒടിഞ്ഞുപോയി! ഒടുവിൽ പശ ഉപയോഗിച്ച് അത് ഒട്ടിച്ച് വീണ്ടും ശരിയാക്കേണ്ടിവന്നു."
          ],
          github: "https://github.com/nvaneed/scrap_hackthon"
        }
      ],
      crew: [
        { name: "Amal S Kumar", role: "Grand Ambition & Scrap Hunting" },
        { name: "Christy", role: "Hardware, ESP32 & Remote Wizard" },
        { name: "Navaneeth", role: "Audio, Bluetooth & Clock Surgery" },
        { name: "Sivakami", role: "Core Architecture & Clock Mechanics" }
      ],
      creditsIntro: "തകരാറിലായ മോട്ടോറുകൾക്കും ഒടിഞ്ഞ ക്ലോക്കിന്റെ ഘടകങ്ങൾക്കും ഒടുവിൽ ബിരിയാണിയുടെയും കട്ടൻ ചായയുടെയും കരുത്തിൽ പൂർത്തിയാക്കിയ ഒരു റിവേഴ്സ് ഹാർഡ്വെയർ അനുഭവം.",
      funNotesTitle: "ഫൈനൽ നോട്ടുകൾ: സ്ക്രാപ്പ് കണ്ടുപിടുത്തങ്ങൾ",
      funNotesIntro: "നിരന്തരമായ പരീക്ഷണങ്ങൾക്കിടയിൽ ഈ ഹാക്കത്തോണിൽ പിറവിയെടുത്ത 3 പ്രധാന സ്ക്രാപ്പ് കണ്ടുപിടുത്തങ്ങൾ:",
      funNotes: [
        {
          tag: "ACCIDENTAL INSTRUMENT",
          title: "പൊട്ടൻഷ്യോമീറ്റർ റാക്ക് & പിനിയൻ വയലിൻ (Absolute Violin)",
          desc: "ബിൽഡർ ഇൻവെസ്റ്റ്മെന്റ് കിറ്റിൽ നിന്ന് ലഭിച്ച സ്പെയർ റാക്ക് & പിനിയൻ ഗിയർ അമൽ ഒരു റോട്ടറി പൊട്ടൻഷ്യോമീറ്ററുമായി ഘടിപ്പിച്ചു. ഗിയറിന്റെ പല്ലുകൾ വയലിൻ ബോ പോലെ മുന്നോട്ടും പിന്നോട്ടും ചലിപ്പിച്ച് അനലോഗ് റെസിസ്റ്റൻസ് മാറ്റി, ബ്ലൂടൂത്ത് സ്പീക്കറിലൂടെ അത്ഭുതകരമായ സിന്തസൈസർ നാദങ്ങൾ സൃഷ്ടിച്ചു!",
          specs: ["Rack & Pinion Mechanism", "Rotary Potentiometer", "Bluetooth Audio Driver"],
          github: "https://github.com/Lunarmist-byte/absoluteviolin"
        },
        {
          tag: "WIRELESS BEACON",
          title: "റെയിൻബോ RGB LED ടോർച്ച് (Absolute Torch)",
          desc: "സ്റ്റെപ്പർ മോട്ടോറിനായി കാത്തിരുന്ന സമയത്ത് വീട്ടിൽ നിന്ന് കൊണ്ടുവന്ന കേടായ പഴയ ടോർച്ച് Christy പൊളിച്ചെടുത്തു. കരിഞ്ഞ ബൾബിന് പകരം RGB LED മൊഡ്യൂളും ESP32-യും ഘടിപ്പിച്ചു. ഒരു ക്യാപ്റ്റീവ് പോർട്ടൽ വഴി ഫോണിൽ നിന്ന് ഏത് നിറത്തിലേക്കും മാറ്റാൻ കഴിയുന്ന അത്ഭുതകരമായ റെയിൻബോ ടോർച്ച് തയ്യാറായി!",
          specs: ["ESP32 Wi-Fi", "RGB High-Power LED", "Phone Captive Portal"],
          github: "https://github.com/christy-basil-anil/absolute-torch/blob/main/absolute_torch.ino"
        },
        {
          tag: "KINETIC TIMEPIECE",
          title: "വെബ് ഇന്റർഫേസ് കൺട്രോൾഡ് ക്വാർട്സ് ക്ലോക്ക്",
          desc: "പ്രധാന പ്രോജക്റ്റായ വിന്റേജ് ക്വാർട്സ് ക്ലോക്ക്! നമ്മുടെ ഇനിഷ്യൽ പ്ലാൻ റിമോട്ടിന്റെ IR വെച്ചിട്ട് കൺട്രോൾ ചെയ്യാമെന്നായിരുന്നു (Remote inte IR vechitt control cheyyamennarnnu). എന്നാൽ IR സെൻസർ വർക്കായില്ല! അതുകൊണ്ട് പ്ലാനിൽ പെട്ടെന്ന് മാറ്റം വരുത്തി, ഒരു വെബ് ഇന്റർഫേസ് വെച്ച് ക്ലോക്ക് മോണിറ്റർ ചെയ്യാനും കൺട്രോൾ ചെയ്യാനുമുള്ള സംവിധാനമാക്കി മാറ്റി. പരീക്ഷണത്തിനിടയിൽ സൂചി ഒടിഞ്ഞുപോയെങ്കിലും പശ വെച്ച് അത്ഭുതകരമായി ഒട്ടിച്ചു. ഒടുവിൽ സ്പെയർ പാർട്സുകളിൽ നിന്ന് ഒത്തുവന്ന മോട്ടോറും ഡ്രൈവറും ഘടിപ്പിച്ച്, വെബ് ഇന്റർഫേസിലൂടെ ലോകത്തിലെ ഏത് രാജ്യത്തിന്റെ സമയത്തേക്കും സൂചികൾ സ്വയം തിരിഞ്ഞ് സമയം കാണിക്കുന്ന സ്ക്രാപ്പ് ക്ലോക്ക് പൂർണ്ണമായി സജ്ജമായി!",
          specs: ["Glued Quartz Hands", "Web Interface & API", "IR Sensor Pivot", "Real-Time World Zones"],
          github: "https://github.com/nvaneed/scrap_hackthon"
        }
      ],
      specialThanksTitle: "SPECIAL THANKS",
      specialThanksText: "TinkerHub Community · Local Kochi Aakrikadas (Scrap Shops) · Kerala Tea Stalls"
    },

    en: {
      headline: "Tinker Hub organised scraphack",
      subheadline: "A reverse hardware hackathon of discarded electronics, motors, and biryani.",
      langLabel: "മലയാളത്തിലേക്ക് മാറ്റുക",
      navLangText: "മലയാളം",
      creditsTitle: "THE END",
      scenes: [
        {
          badge: "Scene 01 · Origin",
          title: "Tinker Hub organised scraphack",
          image: "", // Add image src here (e.g. "images/scene-01.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "Kollavarsham 2026, TinkerHub organised an event called Scraphack. Scraphack is a hardware hackathon that challenges participants to explore discarded electronics, identify useful components, and build something new using whatever they find. Unlike conventional hackathons, where teams start with an idea and acquire the components needed to build it, Scraphack reverses the process.",
            "Amal and core team members Navaneeth and Sivakami registered for the event. Unfortunately, the other members of Christy’s core team had exams, so Christy registered alone. When the team formation process began, they ended up forming a team together."
          ]
        },
        {
          badge: "Scene 02 · Strategy",
          title: "Planning calls",
          image: "", // Add image src here (e.g. "images/scene-02.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "The four of us were spread across four different corners of Kerala, so we connected through group calls to plan our project. Amal, inspired by the scrap he had found, came up with an idea for a project that could surpass Elon Musk’s flying car and Tony Stark’s suit. The other three were left completely speechless by his ambition!",
            "Eventually, we decided to work with things we already had at home, such as TVs, fans, and refrigerators. After exploring several possibilities, we finally settled on a clock. We started thinking about what we could do with it, and eventually, an idea struck us."
          ]
        },
        {
          badge: "Scene 03 · Blueprint",
          title: "The Idea",
          image: "", // Add image src here (e.g. "images/scene-03.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "We decided to repair a broken clock using a motor. Then, we planned to use a TV remote to control it, allowing the clock to display the corresponding time when we pressed the button for a particular country. We also planned to use the voice button on the remote so that we could simply say a country's name and have the clock display its local time."
          ]
        },
        {
          badge: "Scene 04 · Day One",
          title: "Hackathon day",
          image: "", // Add image src here (e.g. "images/scene-04.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "By 9:30 AM, Amal and the other core team members had reached the TinkerHub space. As soon as they arrived, they started searching for nearby scrap shops. However, they couldn't find anything useful at first. The first scrap shop they came across mainly dealt with metal scrap.",
            "After having a milkshake and biryani, it was around 1:30 PM when Christy and the others finally arrived."
          ]
        },
        {
          badge: "Scene 05 · The Scrap Hunt",
          title: "Visit Aakrikada",
          image: "", // Add image src here (e.g. "images/scene-05.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "Once everyone had arrived, we went together to a nearby scrap shop. We spent quite some time searching through the piles of scrap. There were plenty of broken electronic devices, and each of us started looking for useful components.",
            "We eventually picked up a broken Bluetooth speaker. Just then, we received a call from Feb. We immediately rushed back to the TinkerHub space."
          ]
        },
        {
          badge: "Scene 06 · Execution",
          title: "Intial plan",
          image: "", // Add image src here (e.g. "images/scene-06.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "We split the work into two parts. On one side, we dismantled the remote and tried to figure out how to reprogram it. On the other side, we experimented with servos and gears to control the clock.",
            "Our initial plan was to control the clock using the TV remote's IR. But the IR sensor didn't work, so there was a change in plans—we pivoted to monitoring and controlling it through a web interface instead!"
          ]
        },
        {
          badge: "Scene 07 · The Struggle",
          title: "Failures",
          image: "", // Add image src here (e.g. "images/scene-07.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "The Micro Servo SG90 can rotate only up to 180 degrees, whereas controlling the clock required a motor capable of continuous 360-degree rotation. So, we tried modifying the SG90 servo, but that plan failed.",
            "Next, we decided to upgrade to a 5V stepper motor. Unfortunately, we couldn't find a compatible motor driver. We then decided to use a 12V stepper motor instead and picked up two motor drivers. However, this setup required around 12 jumper wires, and even after connecting everything, it still didn't work.",
            "After trying multiple stepper motor drivers, we realised that the problem wasn't with the drivers at all. The motor itself was dead!",
            "At that point, we were almost ready to give up hope. But after some time, we discovered that the components we had brought with us actually included a suitable motor and motor driver. We used them to get the setup working."
          ]
        },
        {
          badge: "Scene 08 · Side Quests",
          title: "Side Quest",
          image: "", // Add image src here (e.g. "images/scene-08.jpg" or URL)
          imageCaption: "",
          sideQuests: [
            {
              title: "Absolute Torch",
              desc: "We had brought a broken torch from home. While waiting for a working stepper motor, Christy replaced the torch's LED with an RGB LED module and connected it to an ESP32. We then set up a captive portal that allowed us to control the light using a phone. Finally, we had a torch whose colours could be changed!",
              github: "https://github.com/christy-basil-anil/absolute-torch/blob/main/absolute_torch.ino"
            },
            {
              title: "Absolute Violin",
              desc: "Navaneeth repaired the Bluetooth speaker we had found at the scrap shop. Meanwhile, Amal got a spare gear left over from a builder's investment project. He added a potentiometer to it and tried to turn it into a violin.",
              github: "https://github.com/Lunarmist-byte/absoluteviolin"
            }
          ]
        },
        {
          badge: "Scene 09 · Relief",
          title: "Chaya Break",
          image: "", // Add image src here (e.g. "images/scene-09.jpg" or URL)
          imageCaption: "",
          paragraphs: [
            "After working continuously and feeling like our brains were about to explode, we decided to take a break and head out for some tea."
          ]
        },
        {
          badge: "Scene 10 · The Miracle Fix",
          title: "Breaking Clocks",
          image: "", // Add primary image src here (e.g. "images/scene-10.jpg" or URL)
          imageCaption: "",
          carouselImages: [
            // Add multiple photo URLs or relative paths for Final Scene Carousel here:
            // e.g. "images/final-clock-1.jpg", "images/final-clock-2.jpg"
          ],
          paragraphs: [
            "In an unfortunate accident, one of the clock hands broke off. We glued it back together and continued working!"
          ],
          github: "https://github.com/nvaneed/scrap_hackthon"
        }
      ],
      crew: [
        { name: "Amal S Kumar", role: "Grand Ambition & Scrap Hunting" },
        { name: "Christy", role: "Hardware, ESP32 & Remote Wizard" },
        { name: "Navaneeth", role: "Audio, Bluetooth & Clock Surgery" },
        { name: "Sivakami", role: "Core Architecture & Clock Mechanics" }
      ],
      creditsIntro: "This hardware project was brought to life through blood, sweat, biryani, and stubborn refusal to admit defeat after multiple dead motors.",
      funNotesTitle: "Final Notes: The Scrap Trifecta",
      funNotesIntro: "Beyond the chaos of dead stepper motors and snapped clock hands, three memorable inventions made it out of the scrap pile alive:",
      funNotes: [
        {
          tag: "ACCIDENTAL INSTRUMENT",
          title: "The Rack & Pinion Violin with Potentiometer (Absolute Violin)",
          desc: "A leftover rack and pinion gear mechanism salvaged from a builder's kit was married to a rotary potentiometer and wired to a speaker. Sliding the notched rack linear teeth rotated the potentiometer shaft like a violin bow across strings, dynamically changing analog resistance to generate screeching, glorious electronic violin sounds.",
          specs: ["Rack & Pinion Mechanism", "Rotary Potentiometer", "Scrap Audio Driver"],
          github: "https://github.com/Lunarmist-byte/absoluteviolin"
        },
        {
          tag: "WIRELESS BEACON",
          title: "The Rainbow RGB LED Torch (Absolute Torch)",
          desc: "While waiting around for a working stepper motor, Christy dismantled a non-functional household torch brought from home, replacing its burnt LED with a high-intensity RGB module hooked to an ESP32. By spinning up an autonomous Wi-Fi captive portal, anyone who joined the torch's network could cycle beam colors directly from their smartphone browser.",
          specs: ["ESP32 Wi-Fi", "RGB High-Power LED", "Phone Captive Portal"],
          github: "https://github.com/christy-basil-anil/absolute-torch/blob/main/absolute_torch.ino"
        },
        {
          tag: "KINETIC TIMEPIECE",
          title: "The Web API Controlled Scrap World Clock",
          desc: "The centerpiece hack: a resurrected vintage quartz clock. Our initial plan was to control the clock using the TV remote's IR, but the IR sensor didn't work! So change in plans: we pivoted to monitoring and controlling the clock through a custom web interface instead. Even after one of the hands snapped in half during assembly and had to be saved with emergency superglue, it was successfully geared to an unearthed motor and driver, whirring its hands to physically auto-align to world timezones over the web interface.",
          specs: ["Glued Quartz Hands", "Web Interface & API", "IR Sensor Fallback", "Real-Time World Zones"],
          github: "https://github.com/nvaneed/scrap_hackthon"
        }
      ],
      specialThanksTitle: "SPECIAL THANKS",
      specialThanksText: "TinkerHub Community · Local Kochi Aakrikadas (Scrap Shops) · Kerala Tea Stalls"
    }
  };

  // State
  const params = new URLSearchParams(window.location.search);
  const requestedLang = (params.get('lang') || 'ml').toLowerCase();
  let currentLang = (requestedLang === 'en' || requestedLang === 'english') ? 'en' : 'ml';
  let isAutoScrolling = false;
  let scrollSpeedMultiplier = 1; // 1x = 38px/s, 1.5x = 58px/s, 2x = 88px/s

  // DOM Elements
  const storyHeadline = document.getElementById('storyHeadline');
  const storySubheadline = document.getElementById('storySubheadline');
  const scenesFeed = document.getElementById('scenesFeed');
  const creditsTitle = document.getElementById('creditsTitle');
  const creditsCrewGrid = document.getElementById('creditsCrewGrid');
  const storyLangToggleBtn = document.getElementById('storyLangToggleBtn');
  const activeLangLabel = document.getElementById('activeLangLabel');
  const floatLangBtn = document.getElementById('floatLangBtn');
  const floatLangLabel = document.getElementById('floatLangLabel');
  
  const movieModeBtn = document.getElementById('movieModeBtn');
  const moviePlayIcon = document.getElementById('moviePlayIcon');
  const moviePlayText = document.getElementById('moviePlayText');
  
  const speedToggleBtn = document.getElementById('speedToggleBtn');
  const speedLabel = document.getElementById('speedLabel');
  
  const floatPlayBtn = document.getElementById('floatPlayBtn');
  const floatPlayIcon = document.getElementById('floatPlayIcon');
  const floatPlayLabel = document.getElementById('floatPlayLabel');
  
  const floatSpeedBtn = document.getElementById('floatSpeedBtn');
  const floatSpeedLabel = document.getElementById('floatSpeedLabel');
  
  const floatTopBtn = document.getElementById('floatTopBtn');
  const navLiveTime = document.getElementById('navLiveTime');
  
  const creditsIntro = document.getElementById('creditsIntro');
  const funNotesTitle = document.getElementById('funNotesTitle');
  const funNotesIntro = document.getElementById('funNotesIntro');
  const funNotesGrid = document.getElementById('funNotesGrid');
  const specialThanksTitle = document.getElementById('specialThanksTitle');
  const specialThanksText = document.getElementById('specialThanksText');


  // Lightbox Elements
  const photoLightboxModal = document.getElementById('photoLightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  // ==========================================================================
  // Render Story Function
  // ==========================================================================
  function renderStory(lang) {
    currentLang = lang;
    const data = STORY_DATA[lang];
    if (!data) return;

    document.body.classList.toggle('lang-ml', lang === 'ml');

    if (storyHeadline) storyHeadline.textContent = data.headline;
    if (storySubheadline) storySubheadline.textContent = data.subheadline;
    if (creditsTitle) creditsTitle.textContent = data.creditsTitle;

    if (activeLangLabel) activeLangLabel.textContent = data.navLangText;
    if (floatLangLabel) floatLangLabel.textContent = data.navLangText;

    // Render scenes
    if (scenesFeed) {
      scenesFeed.innerHTML = data.scenes.map((scene, idx) => {
        const sceneKey = `scene-${idx + 1}`;
        let contentHtml = '';
        if (scene.paragraphs) {
          contentHtml += scene.paragraphs.map(p => `<p>${p}</p>`).join('');
        }
        if (scene.sideQuests) {
          contentHtml += `
            <div class="side-quest-grid">
              ${scene.sideQuests.map(sq => `
                <div class="side-quest-box">
                  <div class="side-quest-title-row">
                    <h4>${sq.title}</h4>
                    ${sq.github ? `
                      <a href="${sq.github}" target="_blank" rel="noopener noreferrer" class="side-quest-github-btn" title="View Source on GitHub">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        <span>GitHub Repo</span>
                      </a>
                    ` : ''}
                  </div>
                  <p>${sq.desc}</p>
                </div>
              `).join('')}
            </div>
          `;
        }

        const isFinalScene = (idx === data.scenes.length - 1);

        return `
          <article class="scene-card ${isFinalScene ? 'scene-card-final' : ''}" data-scene-key="${sceneKey}">
            <div class="scene-header-row">
              <span class="scene-badge">${scene.badge}</span>
              ${scene.github ? `
                <a href="${scene.github}" target="_blank" rel="noopener noreferrer" class="scene-header-github-btn" title="View Source on GitHub">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>Project Repository</span>
                </a>
              ` : ''}
            </div>
            <h3 class="scene-title">${scene.title}</h3>
            <div class="scene-body">
              ${contentHtml}
            </div>

            <!-- Unified Scene Media Zone (Photos & Carousels beneath scene) -->
            <div class="scene-media-zone" id="scene-media-zone-${idx + 1}" data-scene-id="${sceneKey}" style="display: none;"></div>
          </article>
        `;
      }).join('');
    }

    // Render crew
    if (creditsCrewGrid) {
      creditsCrewGrid.innerHTML = data.crew.map(member => `
        <div class="crew-member-box">
          <span class="crew-name">${member.name}</span>
          <span class="crew-role">${member.role}</span>
        </div>
      `).join('');
    }

    if (creditsIntro && data.creditsIntro) creditsIntro.textContent = data.creditsIntro;
    if (funNotesTitle && data.funNotesTitle) funNotesTitle.textContent = data.funNotesTitle;
    if (funNotesIntro && data.funNotesIntro) funNotesIntro.textContent = data.funNotesIntro;
    if (specialThanksTitle && data.specialThanksTitle) specialThanksTitle.textContent = data.specialThanksTitle;
    if (specialThanksText && data.specialThanksText) specialThanksText.textContent = data.specialThanksText;

    if (funNotesGrid && data.funNotes) {
      funNotesGrid.innerHTML = data.funNotes.map(item => `
        <div class="fun-note-card">
          <div class="fun-note-tag-row">
            <span class="fun-note-tag">${item.tag}</span>
            ${item.github ? `
              <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="fun-github-link" title="View Source on GitHub">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            ` : ''}
          </div>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <div class="fun-note-specs">
            ${item.specs.map(spec => `<span class="fun-spec-pill">${spec}</span>`).join('')}
            ${item.github ? `
              <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="fun-spec-pill fun-github-pill" title="Open GitHub Repository">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub Repository</span>
              </a>
            ` : ''}
          </div>
        </div>
      `).join('');
    }

    // Refresh Photo Gallery Carousel
    initPhotoGallery();

    // Update URL param without reloading
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', lang);
    window.history.replaceState({}, '', newUrl);
  }

  // ==========================================================================
  // Language Switch Handlers
  // ==========================================================================
  function toggleLanguage() {
    playUiClick();
    const nextLang = currentLang === 'ml' ? 'en' : 'ml';
    renderStory(nextLang);
  }

  if (storyLangToggleBtn) storyLangToggleBtn.addEventListener('click', toggleLanguage);
  if (floatLangBtn) floatLangBtn.addEventListener('click', toggleLanguage);

  // ==========================================================================
  // Movie Auto-Scroll Engine (Cinematic Auto-Play)
  // ==========================================================================
  let lastScrollTimestamp = performance.now();

  function autoScrollLoop(now) {
    const dt = (now - lastScrollTimestamp) / 1000;
    lastScrollTimestamp = now;

    if (isAutoScrolling) {
      const baseSpeed = 42 * scrollSpeedMultiplier; // pixels per second
      const step = baseSpeed * dt;
      window.scrollBy(0, step);

      // Check if reached bottom
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 4) {
        setMovieMode(false);
      }
    }

    requestAnimationFrame(autoScrollLoop);
  }
  requestAnimationFrame(autoScrollLoop);

  function setMovieMode(active) {
    isAutoScrolling = active;
    playUiClick();

    if (movieModeBtn) movieModeBtn.classList.toggle('active', isAutoScrolling);
    if (moviePlayText) moviePlayText.textContent = isAutoScrolling ? 'Pause' : 'Play Movie';
    if (floatPlayLabel) floatPlayLabel.textContent = isAutoScrolling ? 'Pause' : 'Play';
  }

  function toggleMovieMode() {
    setMovieMode(!isAutoScrolling);
  }

  if (movieModeBtn) movieModeBtn.addEventListener('click', toggleMovieMode);
  if (floatPlayBtn) floatPlayBtn.addEventListener('click', toggleMovieMode);

  // Speed Toggling
  function cycleSpeed() {
    playUiClick();
    if (scrollSpeedMultiplier === 1) scrollSpeedMultiplier = 1.5;
    else if (scrollSpeedMultiplier === 1.5) scrollSpeedMultiplier = 2;
    else scrollSpeedMultiplier = 1;

    const label = `${scrollSpeedMultiplier}x`;
    if (speedLabel) speedLabel.textContent = label;
    if (floatSpeedLabel) floatSpeedLabel.textContent = `Speed: ${label}`;
  }

  if (speedToggleBtn) speedToggleBtn.addEventListener('click', cycleSpeed);
  if (floatSpeedBtn) floatSpeedBtn.addEventListener('click', cycleSpeed);

  // Scroll to Top
  if (floatTopBtn) {
    floatTopBtn.addEventListener('click', () => {
      playUiClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Live Clock Updater
  function updateLiveClock() {
    if (!navLiveTime) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    navLiveTime.textContent = timeStr;
  }
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // Subtle Web Audio Click
  let audioCtx = null;
  function playUiClick() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(80, t + 0.025);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.03);
    } catch (e) {}
  }

  // ==========================================================================
  // Standardized Scene Media & Photo Gallery Engine
  // ==========================================================================
  let activePhotos = [];
  const sceneCarouselsState = {};

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  async function initPhotoGallery() {
    if (!window.PhotoStore) return;
    try {
      activePhotos = await PhotoStore.getAllPhotos();
      renderSceneMedia(activePhotos);
    } catch (e) {
      console.warn('Error loading photos from PhotoStore:', e);
    }
  }

  // Render photos beneath every scene (Single Card or Full Carousel)
  function renderSceneMedia(storedPhotos) {
    const data = STORY_DATA[currentLang];
    if (!data || !data.scenes) return;

    for (let i = 1; i <= data.scenes.length; i++) {
      const idx = i - 1;
      const scene = data.scenes[idx];
      const sceneKey = `scene-${i}`;
      const zone = document.getElementById(`scene-media-zone-${i}`);
      if (!zone) continue;

      // Collect all photos for this scene
      const scenePhotos = [];

      // 1. Predefined in STORY_DATA
      if (scene.image && scene.image.trim()) {
        scenePhotos.push({
          id: `static_img_${i}`,
          dataUrl: scene.image.trim(),
          title: scene.title || '',
          caption: scene.imageCaption || scene.title || ''
        });
      }
      if (Array.isArray(scene.carouselImages)) {
        scene.carouselImages.forEach((item, cIdx) => {
          if (typeof item === 'string' && item.trim()) {
            scenePhotos.push({
              id: `static_carousel_${i}_${cIdx}`,
              dataUrl: item.trim(),
              title: '',
              caption: `Scene ${i} Photo ${cIdx + 1}`
            });
          } else if (item && (item.src || item.dataUrl)) {
            scenePhotos.push({
              id: `static_carousel_${i}_${cIdx}`,
              dataUrl: item.src || item.dataUrl,
              title: item.title || '',
              caption: item.caption || `Scene ${i} Photo ${cIdx + 1}`
            });
          }
        });
      }

      // 2. Photos uploaded via PhotoStore targeting this scene
      if (Array.isArray(storedPhotos)) {
        const matchingUploads = storedPhotos.filter(p => p.sceneId === sceneKey);
        matchingUploads.forEach(p => {
          scenePhotos.push({
            id: p.id,
            dataUrl: p.dataUrl,
            title: p.title || '',
            caption: p.caption || p.title || `Scene ${i} Photo`
          });
        });
      }

      // If no photos for this scene, keep zone empty and hidden
      if (scenePhotos.length === 0) {
        zone.style.display = 'none';
        zone.innerHTML = '';
        continue;
      }

      zone.style.display = 'block';

      // SINGLE PHOTO: Render clean featured photo card
      if (scenePhotos.length === 1) {
        const photo = scenePhotos[0];
        zone.innerHTML = `
          <div class="scene-single-photo-card" data-scene-id="${sceneKey}">
            <div class="scene-photo-viewport" tabindex="0" role="button" aria-label="View photo in full size">
              <img class="scene-photo-img" src="${photo.dataUrl}" alt="${escapeHtml(photo.title || photo.caption || scene.title)}" loading="lazy" />
              <div class="scene-photo-badge-row">
                <span class="scene-photo-pill">${scene.badge}</span>
              </div>
              ${(photo.caption || photo.title) ? `
                <div class="scene-photo-caption-overlay">
                  ${photo.title ? `<strong class="scene-photo-caption-title">${escapeHtml(photo.title)}</strong>` : ''}
                  <span class="scene-photo-caption-text">${escapeHtml(photo.caption || photo.title)}</span>
                </div>
              ` : ''}
              <div class="scene-photo-zoom-hint" title="Click to view full size">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </div>
            </div>
          </div>
        `;

        const vp = zone.querySelector('.scene-photo-viewport');
        if (vp) {
          vp.addEventListener('click', () => openLightbox(photo));
          vp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openLightbox(photo);
            }
          });
        }
      } else {
        // MULTIPLE PHOTOS: Render responsive interactive carousel
        sceneCarouselsState[i] = {
          photos: scenePhotos,
          currentIndex: 0
        };

        zone.innerHTML = `
          <div class="scene-carousel-card" id="scene-carousel-${i}" data-scene-id="${sceneKey}">
            <div class="scene-carousel-header">
              <div class="carousel-badge-group">
                <span class="scene-carousel-badge">PHOTO GALLERY</span>
                <span class="scene-carousel-scene-label">${scene.badge}</span>
              </div>
              <div class="scene-carousel-counter" id="carousel-counter-${i}">
                <span class="current-slide">1</span> / <span class="total-slides">${scenePhotos.length}</span>
              </div>
            </div>

            <div class="scene-carousel-viewport" id="carousel-viewport-${i}">
              <div class="scene-carousel-track" id="carousel-track-${i}">
                ${scenePhotos.map((p, pIdx) => `
                  <div class="scene-carousel-slide ${pIdx === 0 ? 'active' : ''}" data-slide-index="${pIdx}">
                    <img src="${p.dataUrl}" alt="${escapeHtml(p.title || p.caption || `Scene ${i} Photo ${pIdx + 1}`)}" loading="lazy" />
                    <div class="scene-photo-zoom-hint" title="Click to view full size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </div>
                  </div>
                `).join('')}
              </div>

              <button class="scene-carousel-nav-btn prev" type="button" aria-label="Previous photo" data-carousel-prev="${i}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button class="scene-carousel-nav-btn next" type="button" aria-label="Next photo" data-carousel-next="${i}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

              <div class="scene-carousel-caption" id="carousel-caption-${i}">
                <span class="caption-text">${escapeHtml(scenePhotos[0].caption || scenePhotos[0].title || '')}</span>
              </div>
            </div>

            <div class="scene-carousel-thumbs" id="carousel-thumbs-${i}">
              ${scenePhotos.map((p, pIdx) => `
                <button type="button" class="scene-carousel-thumb ${pIdx === 0 ? 'active' : ''}" data-thumb-scene="${i}" data-thumb-index="${pIdx}" aria-label="Go to photo ${pIdx + 1}">
                  <img src="${p.dataUrl}" alt="Thumbnail ${pIdx + 1}" loading="lazy" />
                </button>
              `).join('')}
            </div>
          </div>
        `;

        // Attach listeners for carousel controls
        const prevBtn = zone.querySelector(`[data-carousel-prev="${i}"]`);
        const nextBtn = zone.querySelector(`[data-carousel-next="${i}"]`);

        if (prevBtn) {
          prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            playUiClick();
            stepSceneCarousel(i, -1);
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            playUiClick();
            stepSceneCarousel(i, 1);
          });
        }

        // Thumbnail buttons
        const thumbBtns = zone.querySelectorAll(`[data-thumb-scene="${i}"]`);
        thumbBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const targetIdx = parseInt(btn.getAttribute('data-thumb-index'), 10);
            playUiClick();
            goToSceneSlide(i, targetIdx);
          });
        });

        // Click on slide image to zoom in lightbox
        const slideImgs = zone.querySelectorAll('.scene-carousel-slide img');
        slideImgs.forEach((img, sIdx) => {
          img.addEventListener('click', () => {
            openLightbox(scenePhotos[sIdx]);
          });
        });
      }
    }
  }

  function stepSceneCarousel(sceneNum, direction) {
    const st = sceneCarouselsState[sceneNum];
    if (!st || !st.photos || st.photos.length <= 1) return;
    let nextIdx = st.currentIndex + direction;
    if (nextIdx < 0) nextIdx = st.photos.length - 1;
    if (nextIdx >= st.photos.length) nextIdx = 0;
    goToSceneSlide(sceneNum, nextIdx);
  }

  function goToSceneSlide(sceneNum, slideIdx) {
    const st = sceneCarouselsState[sceneNum];
    if (!st || !st.photos || st.photos.length <= 1) return;
    if (slideIdx < 0) slideIdx = st.photos.length - 1;
    if (slideIdx >= st.photos.length) slideIdx = 0;
    st.currentIndex = slideIdx;

    const track = document.getElementById(`carousel-track-${sceneNum}`);
    const counter = document.getElementById(`carousel-counter-${sceneNum}`);
    const captionEl = document.getElementById(`carousel-caption-${sceneNum}`);
    const thumbsRow = document.getElementById(`carousel-thumbs-${sceneNum}`);

    if (track) {
      const slides = track.querySelectorAll('.scene-carousel-slide');
      slides.forEach((s, idx) => {
        s.classList.toggle('active', idx === slideIdx);
      });
    }

    if (counter) {
      const curEl = counter.querySelector('.current-slide');
      if (curEl) curEl.textContent = slideIdx + 1;
    }

    if (captionEl) {
      const capSpan = captionEl.querySelector('.caption-text');
      const photo = st.photos[slideIdx];
      if (capSpan && photo) {
        capSpan.textContent = photo.caption || photo.title || '';
        captionEl.style.display = (photo.caption || photo.title) ? 'flex' : 'none';
      }
    }

    if (thumbsRow) {
      const thumbs = thumbsRow.querySelectorAll('.scene-carousel-thumb');
      thumbs.forEach((t, idx) => {
        const isActive = (idx === slideIdx);
        t.classList.toggle('active', isActive);
        if (isActive) {
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    }
  }

  // Lightbox Modal Functions
  function openLightbox(photo) {
    if (!photoLightboxModal || !lightboxImg) return;
    const url = (typeof photo === 'string') ? photo : (photo.dataUrl || photo.src || '');
    if (!url) return;
    lightboxImg.src = url;
    if (lightboxCaption) {
      lightboxCaption.textContent = photo.caption || photo.title || '';
    }
    photoLightboxModal.style.display = 'flex';
    photoLightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!photoLightboxModal) return;
    photoLightboxModal.style.display = 'none';
    photoLightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (photoLightboxModal && photoLightboxModal.style.display !== 'none') {
      if (e.key === 'Escape') closeLightbox();
    }
  });

  // Initial render on load
  renderStory(currentLang);

})();

