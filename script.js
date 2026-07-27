// === دوال تغيير اللغات (AR, EN, ZH, FR) ===
const translations = {
    ar: {
        title: "XTR | تيم المحترفين",
        nav_home: "الرئيسية",
        nav_founders: "المؤسسون",
        nav_members: "الأعضاء",
        nav_media: "الوسائط",
        nav_rules: "القوانين",
        hero_title: "CLAN XTR",
        hero_subtitle: "Elite Survival Clan",
        btn_discord: "Join Discord",
        btn_apply: "Apply To Clan",
        stat_members: "إجمالي الزوار",
        sec_founders: "المؤسسون",
        sec_members: "أعضاء التيم",
        sec_media: "الصور والوسائط",
        sec_rules: "قوانين التيم",
        role_founder: "FOUNDER",
        role_member: "MEMBER",
        rule1_title: "🛡️ 1. الاحترام",
        rule1_1: "ممنوع الإهانة أو التقليل من أي عضو.",
        rule1_2: "أي خلاف يتحل في الخاص أو مع القائد.",
        rule1_3: "ممنوع إثارة المشاكل داخل التيم.",
        rule2_title: "⏰ 2. الالتزام",
        rule2_1: "أي مهمة يتم تكليفك بها حاول تخلصها في الوقت المتفق عليه.",
        rule2_2: "لو مش قادر تنفذ المهمة، بلغ المسؤول قبل الموعد.",
        rule2_3: "عدم الرد أو تجاهل المهام بشكل متكرر يعتبر تقصير.",
        rule3_title: "💎 3. الموارد",
        rule3_1: "موارد التيم المشتركة ملك للجميع، وممنوع أخذها للاستخدام الشخصي بدون إذن.",
        rule3_2: "أي موارد تجمعها للتيم تتحط في مخزن التيم.",
        rule3_3: "ممنوع إخفاء أو بيع موارد التيم بدون موافقة.",
        rule4_title: "⚔️ 4. القتال والحروب",
        rule4_1: "ممنوع بدء حرب أو مهاجمة تيم آخر بدون موافقة القائد.",
        rule4_2: "في حالة الهجوم علينا، كل الأعضاء المطلوبين لازم يساعدوا في الدفاع حسب قدرتهم.",
        rule4_3: "ممنوع ترك زميل في معركة بدون سبب واضح.",
        rule5_title: "🔒 5. الأسرار",
        rule5_1: "ممنوع تسريب مكان القاعدة أو المخازن أو أي معلومات سرية خارج التيم.",
        rule5_2: "ممنوع مشاركة خطط التيم مع أي لاعب آخر.",
        rule6_title: "🏗️ 6. الحماية والمسافة والملكية",
        rule6_1: "ممنوع منعاً باتاً بناء أي قواعد فرعية أو بيوت على مسافة أقل من 500 بلوكة من القاعدة الرئيسية لتجنب كشف موقع التيم أو إضعاف حمايته.",
        rule7_title: "🤝 7. التعاون والمهمات الجماعية",
        rule7_1: "عند الإعلان عن مشروع جماعي مثل بناء فارمات أو تطوير القاعدة، يجب على المتاحين المشاركة بقدر المستطاع لسرعة إنجازه.",
        rule7_2: "احترام ممتلكات وأدوات الآخرين الشخصية الموضوعة في صناديقهم الخاصة وعدم العبث بها نهائياً.",
        rule8_title: "⚡ 8. النشاط والفعالية",
        rule8_1: "الغياب عن اللعب لفترة طويلة (أكثر من 3 ايام) بدون إذن مسبق للقائد يعرض العضو لخطر مغادرة التيم لتفريغ مكانه.",
        rule8_2: "حضور الاجتماعات أو الفعاليات الكبرى للتيم إلزامي إلا في حال وجود عذر قسري.",
        rule9_title: "🔗 9. التحالفات الخارجية",
        rule9_1: "ممنوع التحالف مع شخص أو تيم من غير علم القائد نهائياً.",
        rule10_title: "⚠️ 10. العقوبات",
        pen1_title: "المخالفة الأولى:",
        pen1_desc: "تنبيه.",
        pen2_title: "المخالفة الثانية:",
        pen2_desc: "سحب بعض الصلاحيات.",
        pen3_title: "المخالفة الثالثة:",
        pen3_desc: "إخراج من التيم.",
        imp_title: "⭐ قاعدة مهمة",
        imp_p1: "التيم مش مبني على الخوف، التيم مبني على الثقة والالتزام.",
        imp_p2: "كل عضو يحترم التيم، والتيم يحترمه ويحميه.",
        footer_text: "© 2026 XTR Clan. جميع الحقوق محفوظة.",
        modal_title: "📋 استمارة انضمام جديدة",
        form_discord: "💬 يوزر ديسكورد:",
        form_realname: "👤 الاسم الحقيقي:",
        form_mc: "🎮 اسم ماينكرافت:",
        form_years: "⛏️ سنوات اللعب:",
        form_hours: "🕒 ساعات اللعب:",
        form_age: "🎂 العمر:",
        form_role: "⚔️ المهمة:",
        form_religion: "☪️ الديانة:",
        form_reason: "💬 سبب الانضمام:",
        ph_discord: "Your discord username...",
        ph_realname: "اكتب اسمك الحقيقي...",
        ph_mc: "اسمك في اللعبة...",
        ph_years: "كم سنة؟",
        ph_hours: "كام ساعة في اليوم؟",
        ph_age: "عمرك...",
        ph_religion: "ديانتك...",
        ph_reason: "اكتب سبب انضمامك...",
        role_fighter_opt: "Fighter",
        role_builder_opt: "Builder",
        role_pvper_opt: "PvPer",
        btn_submit: "إرسال الطلب 🚀"
    },
    en: {
        title: "XTR | Elite Clan",
        nav_home: "Home",
        nav_founders: "Founders",
        nav_members: "Members",
        nav_media: "Media",
        nav_rules: "Rules",
        hero_title: "CLAN XTR",
        hero_subtitle: "Elite Survival Clan",
        btn_discord: "Join Discord",
        btn_apply: "Apply To Clan",
        stat_members: "Total Visitors",
        sec_founders: "Founders",
        sec_members: "Team Members",
        sec_media: "Media & Gallery",
        sec_rules: "Team Rules",
        role_founder: "FOUNDER",
        role_member: "MEMBER",
        rule1_title: "🛡️ 1. Respect",
        rule1_1: "No insults or belittling any member.",
        rule1_2: "Any dispute must be resolved in private or with the leader.",
        rule1_3: "Creating drama within the team is strictly forbidden.",
        rule2_title: "⏰ 2. Commitment",
        rule2_1: "Try to finish any assigned task within the agreed time.",
        rule2_2: "If unable to complete a task, notify the admin beforehand.",
        rule2_3: "Repeatedly ignoring tasks is considered negligence.",
        rule3_title: "💎 3. Resources",
        rule3_1: "Shared team resources belong to everyone and cannot be taken without permission.",
        rule3_2: "Any resources gathered for the team must be put in the team storage.",
        rule3_3: "Hiding or selling team resources without approval is forbidden.",
        rule4_title: "⚔️ 4. Combat & Wars",
        rule4_1: "Do not start a war or attack another team without leader approval.",
        rule4_2: "In case of attack, all required members must help defend as much as they can.",
        rule4_3: "Leaving a teammate in battle without a clear reason is forbidden.",
        rule5_title: "🔒 5. Secrets",
        rule5_1: "Do not leak the base location, storages, or any confidential info outside the team.",
        rule5_2: "Sharing team plans with any other player is strictly forbidden.",
        rule6_title: "🏗️ 6. Protection & Distance",
        rule6_1: "Strictly forbidden to build sub-bases or houses closer than 500 blocks from the main base.",
        rule7_title: "🤝 7. Teamwork",
        rule7_1: "Participate in team projects like farms or upgrades when available.",
        rule7_2: "Respect others' personal property and tools in their private chests.",
        rule8_title: "⚡ 8. Activity",
        rule8_1: "Being absent for more than 3 days without notice risks team removal.",
        rule8_2: "Attending major meetings or team events is mandatory unless excused.",
        rule9_title: "🔗 9. Alliances",
        rule9_1: "No external alliances without the leader's direct knowledge.",
        rule10_title: "⚠️ 10. Penalties",
        pen1_title: "First offense:",
        pen1_desc: "Warning.",
        pen2_title: "Second offense:",
        pen2_desc: "Revocation of privileges.",
        pen3_title: "Third offense:",
        pen3_desc: "Kicked from the team.",
        imp_title: "⭐ Important Rule",
        imp_p1: "The team is built on trust and commitment, not fear.",
        imp_p2: "Respect the team, and the team will respect and protect you.",
        footer_text: "© 2026 XTR Clan. All rights reserved.",
        modal_title: "📋 New Clan Application",
        form_discord: "💬 Discord Username:",
        form_realname: "👤 Real Name:",
        form_mc: "🎮 Minecraft Name:",
        form_years: "⛏️ Years Playing:",
        form_hours: "🕒 Hours Playing:",
        form_age: "🎂 Age:",
        form_role: "⚔️ Role:",
        form_religion: "☪️ Religion:",
        form_reason: "💬 Reason to Join:",
        ph_discord: "Your discord username...",
        ph_realname: "Write your real name...",
        ph_mc: "Your in-game name...",
        ph_years: "How many years?",
        ph_hours: "Hours per day?",
        ph_age: "Your age...",
        ph_religion: "Your religion...",
        ph_reason: "Write your reason...",
        role_fighter_opt: "Fighter",
        role_builder_opt: "Builder",
        role_pvper_opt: "PvPer",
        btn_submit: "Submit Application 🚀"
    },
    zh: {
        title: "XTR | 精英战队",
        nav_home: "首页",
        nav_founders: "创始人",
        nav_members: "成员",
        nav_media: "媒体",
        nav_rules: "规则",
        hero_title: "CLAN XTR",
        hero_subtitle: "精英生存战队",
        btn_discord: "加入Discord",
        btn_apply: "申请加入",
        stat_members: "总访客数",
        sec_founders: "创始人",
        sec_members: "战队成员",
        sec_media: "媒体画廊",
        sec_rules: "战队规则",
        role_founder: "创始人",
        role_member: "成员",
        rule1_title: "🛡️ 1. 尊重",
        rule1_1: "严禁侮辱或看低任何成员。",
        rule1_2: "任何纠纷必须私下解决或找队长处理。",
        rule1_3: "严禁在队内挑起事端。",
        rule2_title: "⏰ 2. 承诺",
        rule2_1: "在约定时间内完成分配的任务。",
        rule2_2: "如果无法完成，请提前通知管理员。",
        rule2_3: "屡次忽视任务将被视为失职。",
        rule3_title: "💎 3. 资源",
        rule3_1: "共享资源属于所有人，未经许可不得私自拿取。",
        rule3_2: "为战队收集的资源必须放入战队仓库。",
        rule3_3: "严禁私藏或出售战队资源。",
        rule4_title: "⚔️ 4. 战斗与战争",
        rule4_1: "未经队长批准，不得擅自挑起战争或攻击其他战队。",
        rule4_2: "遭遇袭击时，所有可用成员必须尽力协助防御。",
        rule4_3: "严禁无故在战斗中抛弃队友。",
        rule5_title: "🔒 5. 机密",
        rule5_1: "严禁向外泄漏基地位置、仓库或任何机密信息。",
        rule5_2: "严禁与任何其他玩家分享战队计划。",
        rule6_title: "🏗️ 6. 保护与距离",
        rule6_1: "严禁在距离主基地500方以内建造分基地或房屋。",
        rule7_title: "🤝 7. 团队合作",
        rule7_1: "积极参与农场建设或基地升级等集体项目。",
        rule7_2: "尊重他人个人箱子里的财产和工具。",
        rule8_title: "⚡ 8. 活跃度",
        rule8_1: "无故缺席超过3天将面临被清退的风险。",
        rule8_2: "必须参加重要会议或战队活动。",
        rule9_title: "🔗 9. 外部联盟",
        rule9_1: "未经队长知情，不得私自结盟。",
        rule10_title: "⚠️ 10. 惩罚",
        pen1_title: "初犯：",
        pen1_desc: "警告。",
        pen2_title: "再犯：",
        pen2_desc: "撤销部分权限。",
        pen3_title: "三犯：",
        pen3_desc: "移出战队。",
        imp_title: "⭐ 重要规则",
        imp_p1: "战队建立在信任与承诺之上，而非恐惧。",
        imp_p2: "尊重战队，战队自会保护你。",
        footer_text: "© 2026 XTR Clan. 保留所有权利。",
        modal_title: "📋 战队申请表",
        form_discord: "💬 Discord 用户名:",
        form_realname: "👤 真实姓名:",
        form_mc: "🎮 我的世界ID:",
        form_years: "⛏️ 游玩年限:",
        form_hours: "🕒 每日游戏时间:",
        form_age: "🎂 年龄:",
        form_role: "⚔️ 职位:",
        form_religion: "☪️ 信仰:",
        form_reason: "💬 申请理由:",
        ph_discord: "您的discord用户名...",
        ph_realname: "填写真实姓名...",
        ph_mc: "游戏内的名字...",
        ph_years: "几年？",
        ph_hours: "一天几小时？",
        ph_age: "你的年龄...",
        ph_religion: "你的信仰...",
        ph_reason: "写下原因...",
        role_fighter_opt: "战士",
        role_builder_opt: "建造师",
        role_pvper_opt: "PvP高手",
        btn_submit: "提交申请 🚀"
    },
    fr: {
        title: "XTR | Clan d'Élite",
        nav_home: "Accueil",
        nav_founders: "Fondateurs",
        nav_members: "Membres",
        nav_media: "Médias",
        nav_rules: "Règles",
        hero_title: "CLAN XTR",
        hero_subtitle: "Elite Survival Clan",
        btn_discord: "Rejoindre Discord",
        btn_apply: "Rejoindre le Clan",
        stat_members: "Visiteurs totaux",
        sec_founders: "Fondateurs",
        sec_members: "Membres de l'équipe",
        sec_media: "Médias et Galerie",
        sec_rules: "Règles du Clan",
        role_founder: "FONDATEUR",
        role_member: "MEMBRE",
        rule1_title: "🛡️ 1. Respect",
        rule1_1: "Aucune insulte ou rabaissement d'un membre.",
        rule1_2: "Tout litige doit être réglé en privé ou avec le chef.",
        rule1_3: "Créer des histoires au sein de l'équipe est interdit.",
        rule2_title: "⏰ 2. Engagement",
        rule2_1: "Terminez les tâches assignées à temps.",
        rule2_2: "Si vous ne pouvez pas, prévenez l'admin à l'avance.",
        rule2_3: "Ignorer les tâches de façon répétée est inacceptable.",
        rule3_title: "💎 3. Ressources",
        rule3_1: "Les ressources partagées appartiennent à tous.",
        rule3_2: "Mettez les ressources récoltées dans le coffre du clan.",
        rule3_3: "Interdit de cacher ou vendre des ressources sans accord.",
        rule4_title: "⚔️ 4. Guerres",
        rule4_1: "Ne commencez pas de guerre sans l'accord du chef.",
        rule4_2: "En cas d'attaque, aidez à la défense.",
        rule4_3: "Ne laissez pas un coéquipier seul au combat.",
        rule5_title: "🔒 5. Secrets",
        rule5_1: "Ne divulguez pas l'emplacement de la base.",
        rule5_2: "Ne partagez pas les plans du clan.",
        rule6_title: "🏗️ 6. Protection",
        rule6_1: "Interdit de construire à moins de 500 blocs de la base principale.",
        rule7_title: "🤝 7. Travail d'équipe",
        rule7_1: "Participez aux projets collectifs.",
        rule7_2: "Respectez les biens personnels des autres.",
        rule8_title: "⚡ 8. Activité",
        rule8_1: "Absence de plus de 3 jours sans prévenir = risque d'exclusion.",
        rule8_2: "Présence obligatoire aux réunions majeures.",
        rule9_title: "🔗 9. Alliances",
        rule9_1: "Pas d'alliance externe sans l'avis du chef.",
        rule10_title: "⚠️ 10. Sanctions",
        pen1_title: "1ère infraction :",
        pen1_desc: "Avertissement.",
        pen2_title: "2ème infraction :",
        pen2_desc: "Retrait de privilèges.",
        pen3_title: "3ème infraction :",
        pen3_desc: "Expulsion du clan.",
        imp_title: "⭐ Règle Importante",
        imp_p1: "Le clan est basé sur la confiance, pas sur la peur.",
        imp_p2: "Respecte le clan, et il te protégera.",
        footer_text: "© 2026 XTR Clan. Tous droits réservés.",
        modal_title: "📋 Nouvelle Candidature",
        form_discord: "💬 Pseudo Discord:",
        form_realname: "👤 Vrai Nom:",
        form_mc: "🎮 Nom Minecraft:",
        form_years: "⛏️ Années de jeu:",
        form_hours: "🕒 Heures par jour:",
        form_age: "🎂 Âge:",
        form_role: "⚔️ Rôle:",
        form_religion: "☪️ Religion:",
        form_reason: "💬 Raison:",
        ph_discord: "Votre pseudo discord...",
        ph_realname: "Écrivez votre vrai nom...",
        ph_mc: "Votre pseudo en jeu...",
        ph_years: "Combien d'années ?",
        ph_hours: "Combien d'heures ?",
        ph_age: "Votre âge...",
        ph_religion: "Votre religion...",
        ph_reason: "Pourquoi nous rejoindre ?",
        role_fighter_opt: "Fighter",
        role_builder_opt: "Builder",
        role_pvper_opt: "PvPer",
        btn_submit: "Envoyer la candidature 🚀"
    }
};

function changeLanguage(lang) {
    const root = document.getElementById('htmlRoot');
    if (!root) return;
    root.setAttribute('lang', lang);
    if (lang === 'ar') {
        root.setAttribute('dir', 'rtl');
    } else {
        root.setAttribute('dir', 'ltr');
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang');
    });
    if (event && event.target) {
        event.target.classList.add('active-lang');
    }

    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-lang-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// === دالة عرض رسالة تنبيه أنيقة ===
function showCustomAlert(message) {
    let alertBox = document.getElementById("customAlertModal");
    
    if (!alertBox) {
        alertBox = document.createElement("div");
        alertBox.id = "customAlertModal";
        alertBox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
        `;
        
        alertBox.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #121216, #1a1a24);
                border: 1px solid #7c3aed;
                padding: 30px;
                border-radius: 16px;
                text-align: center;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
                font-family: 'Tajawal', sans-serif;
            ">
                <div style="font-size: 40px; margin-bottom: 15px;">⚠️</div>
                <h3 style="color: #fff; margin-bottom: 10px; font-size: 20px;">تنبيه هام</h3>
                <p id="customAlertText" style="color: #cbd5e1; font-size: 15px; line-height: 1.6; margin-bottom: 20px;"></p>
                <button id="customAlertCloseBtn" style="
                    background: linear-gradient(135deg, #7c3aed, #6d28d9);
                    color: white;
                    border: none;
                    padding: 10px 25px;
                    border-radius: 8px;
                    font-weight: bold;
                    cursor: pointer;
                ">حسناً، فهمت</button>
            </div>
        `;
        document.body.appendChild(alertBox);

        document.getElementById("customAlertCloseBtn").addEventListener("click", () => {
            alertBox.style.display = "none";
        });
        
        alertBox.addEventListener("click", (e) => {
            if (e.target === alertBox) {
                alertBox.style.display = "none";
            }
        });
    }

    document.getElementById("customAlertText").innerText = message;
    alertBox.style.display = "flex";
}

function updateApplyButtonState() {
    const openModalBtn = document.getElementById("openModalBtn");
    if (openModalBtn && localStorage.getItem("xtr_global_applied")) {
        openModalBtn.innerHTML = '<span>لقد قدمت مسبقاً</span> <span style="font-size: 18px;">✅</span>';
        openModalBtn.style.background = "linear-gradient(135deg, #143322, #1b4d32)";
        openModalBtn.style.borderColor = "#22c55e";
        openModalBtn.style.cursor = "not-allowed";
    }
}

// === إعدادات سكنات ماينكرافت (مشاية فقط بدون دوران، ومنع تقريب/إبعاد الزوم بعجلة الماوس) ===
window.addEventListener('DOMContentLoaded', () => {
    if (typeof skinview3d === 'undefined') return;

    function loadSkin(canvasId, skinPath, width, height) {
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            try {
                let skinViewer = new skinview3d.SkinViewer({
                    canvas: canvas,
                    width: width,
                    height: height,
                    skin: skinPath
                });
                skinViewer.animation = new skinview3d.WalkingAnimation();
                skinViewer.animation.speed = 0.8;
                skinViewer.autoRotate = false;
                
                // منع التقريب والابعاد بعجلة الماوس للسكنات الرئيسية
                if (skinViewer.controls) {
                    skinViewer.controls.enableZoom = false;
                }
            } catch (e) {
                console.error(e);
            }
        }
    }

    loadSkin('skin_haged', 'haged.png', 180, 280);
    loadSkin('skin_dbu', 'dbu.png', 160, 250);
    loadSkin('skin_khyrox1', 'khyrox1.png', 160, 250);
    loadSkin('skin_julian', 'JULIAN.png', 160, 250);
});

// === تفعيل النوافذ المنبثقة مع تظليل أغمق وتعديل احتواء الصور داخل المربع بشكل كامل (object-fit: cover) ===
document.addEventListener("DOMContentLoaded", () => {
    updateApplyButtonState();

    const modal = document.getElementById("clanModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");

    if (openBtn && modal) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (localStorage.getItem("xtr_global_applied")) {
                showCustomAlert("عذراً يا بطل، لقد قمت بتقديم طلب انضمام مسبقاً من هذا الجهاز ولا يمكنك التكرار!");
                return;
            }
            modal.style.display = "flex";
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    const serverIpModal = document.getElementById("serverIpModal");
    const openServerIpModalBtn = document.getElementById("openServerIpModalBtn");
    const closeServerIpModalBtn = document.getElementById("closeServerIpModalBtn");

    if (openServerIpModalBtn && serverIpModal) {
        openServerIpModalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            serverIpModal.style.display = "flex";
        });
    }

    if (closeServerIpModalBtn && serverIpModal) {
        closeServerIpModalBtn.addEventListener("click", () => {
            serverIpModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (modal && e.target === modal) modal.style.display = "none";
        if (serverIpModal && e.target === serverIpModal) serverIpModal.style.display = "none";
    });

    const copyIpBtn = document.getElementById("copyIpBtn");
    const modalIpText = document.getElementById("modalIpText");

    if (copyIpBtn && modalIpText) {
        copyIpBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(modalIpText.innerText).then(() => {
                copyIpBtn.innerText = "تم النسخ! ✅";
                setTimeout(() => { copyIpBtn.innerText = "نسخ الآيبي 📋"; }, 2000);
            });
        });
    }

    // === نافذة عامة موحدة بظل وتظليل أغمق مع ملء الصور للمربع بالكامل ===
    let universalModal = document.getElementById("universalModal");
    if (!universalModal) {
        universalModal = document.createElement("div");
        universalModal.id = "universalModal";
        universalModal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(8, 8, 12, 0.86);
            backdrop-filter: blur(4px);
            display: none; justify-content: center; align-items: center; z-index: 99999;
        `;
        universalModal.innerHTML = `
            <div id="universalModalContent" style="background: #13131a; padding: 30px; border-radius: 16px; max-width: 700px; width: 92%; color: #fff; position: relative; border: 1px solid #7c3aed; max-height: 85vh; overflow-y: auto; box-shadow: 0 15px 40px rgba(0, 0, 0, 0.85), 0 0 25px rgba(124, 58, 237, 0.25);">
                <div id="universalModalBody" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;"></div>
            </div>
        `;
        document.body.appendChild(universalModal);

        // إغلاق النافذة عند الضغط في أي مكان في الخلفية المعتمة
        universalModal.addEventListener("click", (e) => {
            universalModal.style.display = "none";
        });

        // منع إغلاق النافذة عند الضغط داخل المربع نفسه
        document.getElementById("universalModalContent").addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }

    const universalModalBody = document.getElementById("universalModalBody");

    // 1. تفعيل الضغط على القوانين
    document.querySelectorAll(".rule-box, .important-rule, .rules-container > div").forEach(box => {
        box.style.cursor = "pointer";
        box.addEventListener("click", () => {
            universalModalBody.innerHTML = box.innerHTML;
            universalModal.style.display = "flex";
        });
    });

    // 2. تفعيل الضغط على الصور والوسائط (بحيث تغطي المربع بالكامل object-fit: cover مع احتفاظها بالتنسيق الكامل)
    document.querySelectorAll(".gallery img, .media-img, img").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            universalModalBody.innerHTML = `<img src="${img.src}" style="width: 100%; height: 100%; max-height: 70vh; border-radius: 12px; object-fit: cover; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(124, 58, 237, 0.2);">`;
            universalModal.style.display = "flex";
        });
    });

    // 3. تفعيل الضغط على أعضاء التيم والمؤسسون
    document.querySelectorAll(".skin-card, .member-card, .founder-card, .founder-box").forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", (e) => {
            e.stopPropagation();
            
            const canvasOriginal = card.querySelector("canvas");
            let skinSrc = card.getAttribute("data-skin-url");
            if (!skinSrc && canvasOriginal) {
                if (canvasOriginal.id === 'skin_haged') skinSrc = 'haged.png';
                else if (canvasOriginal.id === 'skin_dbu') skinSrc = 'dbu.png';
                else if (canvasOriginal.id === 'skin_khyrox1') skinSrc = 'khyrox1.png';
                else if (canvasOriginal.id === 'skin_julian') skinSrc = 'JULIAN.png';
                else skinSrc = 'haged.png';
            }

            universalModalBody.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px;">
                    <canvas id="modalSkinCanvas" style="width: 220px; height: 340px;"></canvas>
                </div>
            `;

            const newCanvas = document.getElementById("modalSkinCanvas");
            if (newCanvas && typeof skinview3d !== 'undefined' && skinSrc) {
                try {
                    let modalSkinViewer = new skinview3d.SkinViewer({
                        canvas: newCanvas,
                        width: 220,
                        height: 340,
                        skin: skinSrc
                    });
                    modalSkinViewer.animation = new skinview3d.WalkingAnimation();
                    modalSkinViewer.animation.speed = 0.8;
                    modalSkinViewer.autoRotate = false;
                    
                    if (modalSkinViewer.controls) {
                        modalSkinViewer.controls.enableZoom = false;
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            universalModal.style.display = "flex";
        });
    });

    // === إرسال الاستمارة عبر الـ Webhook ===
    const applyForm = document.getElementById("apply-form");
    if (applyForm) {
        applyForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            if (localStorage.getItem("xtr_global_applied")) {
                showCustomAlert("عذراً، لقد قمت بتقديم طلب انضمام مسبقاً من هذا الجهاز!");
                if (modal) modal.style.display = "none";
                return;
            }

            const discordUser = document.getElementById("discord_username").value;
            const realName = document.getElementById("real_name").value;
            const mcName = document.getElementById("minecraft_name").value;
            const years = document.getElementById("years_playing").value;
            const hours = document.getElementById("hours_playing").value;
            const age = document.getElementById("age").value;
            const role = document.getElementById("role").value;
            const religion = document.getElementById("religion").value;
            const reason = document.getElementById("reason").value;

            const webhookURL = "https://discord.com/api/webhooks/1528823810076446875/ielk1iPvWn6PLnGIV6Kcbmn-V8bk4eeb-z65uzNXFDlRG6reLWku2m8QgdOByDyyzrOd";

            const payload = {
                embeds: [{
                    author: { name: "⚔️ XTR Clan • Elite Application" },
                    title: "📋 New Member Application Received!",
                    description: "تم استلام طلب انضمام جديد إلى السيرفر، تفاصيل اللاعب مسجلة بالأسفل:",
                    color: 7419530,
                    fields: [
                        { name: "👤 يوزر ديسكورد", value: discordUser || "غير محدد", inline: false },
                        { name: "👤 الاسم الحقيقي", value: realName || "غير محدد", inline: false },
                        { name: "🎮 اسم ماينكرافت", value: mcName || "غير محدد", inline: false },
                        { name: "🎂 العمر", value: age || "غير محدد", inline: false },
                        { name: "⛏️ سنوات اللعب", value: years || "غير محدد", inline: false },
                        { name: "🕒 ساعات اللعب", value: hours || "غير محدد", inline: false },
                        { name: "⚔️ المهمة", value: role || "غير محدد", inline: false },
                        { name: "☪️ الديانة", value: religion || "غير محدد", inline: false },
                        { name: "💬 سبب الانضمام", value: reason || "غير محدد", inline: false }
                    ],
                    footer: { text: "XTR Clan System • Elite Minecraft Survival" },
                    timestamp: new Date().toISOString()
                }]
            };

            fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }).then(response => {
                if(response.ok) {
                    localStorage.setItem("xtr_global_applied", "true");
                    updateApplyButtonState();
                    showCustomAlert("تم إرسال طلبك بنجاح يا بطل وتم قفل الاستمارة نهائياً! ✅");
                    modal.style.display = "none";
                    applyForm.reset();
                } else {
                    showCustomAlert("حدث خطأ أثناء الإرسال، تأكد من صحة الرابط.");
                }
            }).catch(err => {
                console.error(err);
                    showCustomAlert("حدث خطأ في الاتصال، حاول مرة أخرى.");
            });
        });
    }

    const counterElement = document.getElementById("totalMembers");
    if (counterElement) {
        fetch('https://abacus.jasoncameron.dev/hit/xtr_clan_visits_2026/visits')
            .then(response => response.json())
            .then(data => {
                let target = data.value;
                let current = 0;
                const increment = Math.max(1, Math.ceil(target / 50)); 
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counterElement.innerText = target;
                        clearInterval(timer);
                    } else {
                        counterElement.innerText = current;
                    }
                }, 25);
            })
            .catch(error => {
                console.error(error);
                counterElement.innerText = "1420";
            });
    }
});