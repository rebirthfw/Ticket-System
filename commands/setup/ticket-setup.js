
const {
  MessageEmbed,
  MessageActionRow,
  MessageButton
} = require('discord.js');

module.exports = {
  name: "ticket-setup",
  aliases: [],
  description: "",
  cooldown: 0,
  userPermissions: ["ADMINISTARTOR"],
  botPermissions: [],

  run: async (client, message, args, ee) => {
    try {
      const generalHelp = new MessageButton().setCustomId('general-help').setEmoji("❓").setLabel('Техническая поддержка').setStyle('SECONDARY');
      const bugReport = new MessageButton().setCustomId('bug-report').setEmoji("💢").setLabel('События, Рассылки, Разное').setStyle('SECONDARY');
      const orderBot = new MessageButton().setCustomId('order-bot').setEmoji("⭕").setLabel('Обращение к Хантеру').setStyle('SECONDARY');
      const sourceCode = new MessageButton().setCustomId('source-code').setEmoji("❔").setLabel('Обращение к Хелперу').setStyle('SECONDARY');      
      //           const staffApply = new MessageButton().setCustomId('staff-apply').setEmoji("📝").setLabel('Персонал. Подать заявку').setStyle('SECONDARY');
      //            const partnerApply = new MessageButton().setCustomId('partner-apply').setEmoji("🤝").setLabel('Партнер. Подать заявку').setStyle('SECONDARY');


      const embed = new MessageEmbed()
        .setTitle(`Создать билет | Заявку | Сообщить о проблеме`)
        .setDescription("Чтобы открыть личный билет поддержки выберие соответствующую кнопку в меню. Просьба не открывать билет если в этом нет крайней необходимости!")
        .setFooter(message.guild.name + " - Copyright © 2017-2022 Сообщество fw-rebirth.com", message.guild.iconURL({
          dynamic: true
        }))
        .setColor(ee.color)

// Кнопки 4 в ряд ============================================================
            const Buttons = new MessageActionRow()
                .addComponents([generalHelp, bugReport, orderBot, sourceCode])
            const buttonsRow = [Buttons]
// Кнопки по 2 в 2 ряда =======================================================
//             const Buttons = new MessageActionRow()
//                .addComponents([generalHelp, bugReport])
//            const Buttons2 = new MessageActionRow()
//                .addComponents([sourceCode, orderBot])
//            const buttonsRow = [Buttons, Buttons2]
//============================================================================    

// по умолчанию 6 кнопок (по 3 в ряд) ========================================
//            const Buttons = new MessageActionRow()
//                .addComponents([generalHelp, bugReport, orderBot])
//            const Buttons2 = new MessageActionRow()
//                .addComponents([staffApply, partnerApply, sourceCode])
//            const buttonsRow = [Buttons, Buttons2]
//============================================================================  
      message.channel.send({
        embeds: [embed],
        components: buttonsRow
      });
    } catch (e) {
      console.log(e)
    }
  }
};
