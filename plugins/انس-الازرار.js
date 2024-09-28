let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*اهلا وسهلا بك في بوت ياتو ♡*'
            },
            body: {
              text: '*جرب الأوامر براحتك* \n *ملحوظة مهمة:* لا تقم بإستخدام البوت كثيراً في الخاص تفادياً لعدم حظرك من استخدام البوت وشكراً لتفهمكم.'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'عرض قائمة الأوامر',
                    sections: [
                      {
                        title: 'تم تطوير هذا البوت بواسطة : أنس عادل',
                        highlight_label: '𝗬𝗔𝗧𝗢 𝗦𝗔𝗠𝗔',
                        rows: [
                          {
                            header: 'Anas Mods',
                            title: '*المـطـور*',
                            highlight_label: 'Dev: Anas Adel',
                            id: '.المطور'
                          }, 
                          {
                            header: 'قائمة أوامر المجموعة',
                            title: '*أوامــر الـمـجـمـوعـة*',
                            description: '',
                            id: '.م1'
                          }, 
                          {
                            header: 'قائمة أوامر الألعاب',
                            title: '*أوامــر الألـعـاب*',
                            description: '',
                            id: '.م2'
                          }, 
                          {
                            header: 'قائمة أوامر الترفيه',
                            title: 'أوامــر التـرفيـه',
                            description: '',
                            id: '.م3'
                          }, 
                          {
                            header: 'قائمة أوامر لعبة البنك',
                            title: '*أوامــر الـبـنـك*',
                            description: '',
                            id: '.م4'
                          }, 
                          {
                            header: 'قائمة أوامر التحميلات',
                            title: '*أوامــر الـتـحـمـيـل*',
                            description: '',
                            id: '.م5'
                          }, 
                          {
                            header: 'قائمة أوامر الأعضاء',
                            title: '*أوامــر الأعـضـاء*',
                            description: '',
                            id: '.م6'
                          }, 
                          {
                            header: 'قائمة أوامر مطور البوت',
                            title: '*أوامــر الـمـطـور*',
                            description: '',
                            id: '.م7'
                          }, 
                          {
                            header: 'قائمة أوامر الميديا والوسائط',
                            title: '*أوامــر الـوسـائـط*',
                            description: '',
                            id: '.م8'
                          }, 
                          {
                            header: 'قائمة أوامر الدين والإسلام',
                            title: '*أوامــر الـديـن*',
                            description: '',
                            id: '.م9'
                          }, 
                          {
                            header: 'قائمة أوامر تحويل الميديا والملصقات',
                            title: '*أوامــر التـحـويـل*',
                            description: '',
                            id: '.م10'
                          }, 
                          {
                            header: 'قائمة أوامر الأدوات والبحث',
                            title: '*أوامــر الأدوات*',
                            description: '',
                            id: '.م11'
                          }, 
                          {
                            header: 'قائمة الأوامر الجديدة',
                            title: '*أوامــر الإكـسـتـرا*',
                            description: '',
                            id: '.م12'
                          }, 
                          {
                            header: 'قائمة أوامر صور الأنمي',
                            title: '*أوامــر الأنـمـي*',
                            description: '',
                            id: '.م13'
                          }, 
                          {
                            header: 'قائمة أوامر الاعضاء المميزين',
                            title: '*أوامــر للمميـزيـن*',
                            description: '',
                            id: '.م14'
                          }, 
                          {
                                header: 'حول البوت', 
                                title: '*معلومــات الــبوت*', 
                                description: '', 
                                id: '.حول', 
                         } 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['شبر', 'شبرين', 'شبرات', 'اشبار']

export default handler
