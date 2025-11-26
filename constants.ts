import { Prophecy, ProphecyCategory } from './types';

// A curated list representing the core arguments from Roger Liebi's works.
// Texts are from the Schlachter 2000 translation.
export const INITIAL_PROPHECIES: Prophecy[] = [
  // --- HERKUNFT & GEBURT ---
  {
    id: '1',
    category: ProphecyCategory.HERKUNFT,
    title: 'Der Same der Frau',
    oldTestament: '1. Mose 3,15',
    otText: 'Und ich will Feindschaft setzen zwischen dir und der Frau, zwischen deinem Samen und ihrem Samen: Er wird dir den Kopf zertreten, und du wirst ihn in die Ferse stechen.',
    newTestament: 'Galater 4,4',
    ntText: 'Als aber die Zeit erfüllt war, sandte Gott seinen Sohn, geboren von einer Frau, geboren unter dem Gesetz.',
    description: 'Die erste Verheißung (Protevangelium): Der Erlöser wird ohne das Zutun eines Mannes geboren (Jungfrauengeburt).'
  },
  {
    id: '2',
    category: ProphecyCategory.HERKUNFT,
    title: 'Nachkomme Abrahams',
    oldTestament: '1. Mose 22,18',
    otText: 'Und in deinem Samen sollen alle Völker der Erde gesegnet werden, weil du meiner Stimme gehorsam warst.',
    newTestament: 'Apostelgeschichte 3,25',
    ntText: 'Ihr seid Söhne der Propheten und des Bundes, den Gott mit unseren Vätern schloss, als er zu Abraham sprach: »Und in deinem Samen sollen gesegnet werden alle Geschlechter der Erde«.',
    description: 'Der Messias muss ein Jude sein, aus der Linie Abrahams.'
  },
  {
    id: '3',
    category: ProphecyCategory.HERKUNFT,
    title: 'Stamm Juda',
    oldTestament: '1. Mose 49,10',
    otText: 'Es wird das Zepter nicht von Juda weichen noch der Herrscherstab von seinen Füßen, bis der Schilo kommt, und ihm werden die Völker gehorsam sein.',
    newTestament: 'Lukas 3,33',
    ntText: 'dem Sohn des Amminadab, dem Sohn des Ram, dem Sohn des Hezron, dem Sohn des Perez, dem Sohn des Juda.',
    description: 'Das Zepter (die Königswürde) gehört dem Stamm Juda.'
  },
  {
    id: '4',
    category: ProphecyCategory.HERKUNFT,
    title: 'Sohn Davids',
    oldTestament: 'Jeremia 23,5',
    otText: 'Siehe, es kommen Tage, spricht der HERR, da werde ich dem David einen gerechten Spross erwecken; der wird als König regieren und weise handeln und Recht und Gerechtigkeit üben im Land.',
    newTestament: 'Lukas 1,32',
    ntText: 'Dieser wird groß sein und Sohn des Höchsten genannt werden; und Gott der Herr wird ihm den Thron seines Vaters David geben.',
    description: 'Der Erlöser muss Erbe des Thrones Davids sein.'
  },
  {
    id: '5',
    category: ProphecyCategory.HERKUNFT,
    title: 'Geburt in Bethlehem',
    oldTestament: 'Micha 5,1',
    otText: 'Und du, Bethlehem-Ephrata, du bist zwar gering unter den Hauptorten von Juda; aber aus dir soll mir der hervorgehen, der Herrscher über Israel werden soll, dessen Hervorgehen von Anfang, von den Tagen der Ewigkeit her gewesen ist.',
    newTestament: 'Matthäus 2,1',
    ntText: 'Als nun Jesus geboren war in Bethlehem in Judäa, in den Tagen des Königs Herodes, siehe, da kamen Weise aus dem Morgenland nach Jerusalem.',
    description: 'Der genaue Geburtsort wurde 700 Jahre vorher präzise benannt.'
  },
  {
    id: '6',
    category: ProphecyCategory.HERKUNFT,
    title: 'Geburt von einer Jungfrau',
    oldTestament: 'Jesaja 7,14',
    otText: 'Darum wird euch der Herr selbst ein Zeichen geben: Siehe, die Jungfrau wird schwanger werden und einen Sohn gebären und wird ihm den Namen Immanuel geben.',
    newTestament: 'Matthäus 1,22-23',
    ntText: 'Das alles aber ist geschehen, damit erfüllt würde, was der Herr durch den Propheten geredet hat, der spricht: »Siehe, die Jungfrau wird schwanger sein und einen Sohn gebären, und man wird ihm den Namen Immanuel geben«.',
    description: 'Ein Zeichen Gottes: Die Geburt durch eine Jungfrau (Almah).'
  },
  {
    id: '7',
    category: ProphecyCategory.HERKUNFT,
    title: 'Kindermord in Bethlehem',
    oldTestament: 'Jeremia 31,15',
    otText: 'So spricht der HERR: Eine Stimme wird in Rama gehört, Wehklage, bitteres Weinen; Rahel weint um ihre Kinder; sie weigert sich, sich trösten zu lassen über ihre Kinder, weil sie nicht mehr sind.',
    newTestament: 'Matthäus 2,16',
    ntText: 'Als sich nun Herodes von den Weisen betrogen sah, wurde er sehr zornig, sandte hin und ließ alle Knaben töten, die in Bethlehem und in seinem ganzen Gebiet waren, von zwei Jahren und darunter.',
    description: 'Der grausame Kindermord durch Herodes wurde von Jeremia vorhergesehen.'
  },
  {
    id: '8',
    category: ProphecyCategory.HERKUNFT,
    title: 'Flucht aus Ägypten',
    oldTestament: 'Hosea 11,1',
    otText: 'Als Israel jung war, gewann ich es lieb, und aus Ägypten habe ich meinen Sohn gerufen.',
    newTestament: 'Matthäus 2,15',
    ntText: 'Und er blieb dort bis zum Tod des Herodes, damit erfüllt würde, was der Herr durch den Propheten geredet hat, der spricht: »Aus Ägypten habe ich meinen Sohn gerufen«.',
    description: 'Der Messias musste zeitweise in Ägypten Zuflucht suchen.'
  },

  // --- LEBEN & DIENST ---
  {
    id: '10',
    category: ProphecyCategory.LEBEN,
    title: 'Vorläufer (Johannes der Täufer)',
    oldTestament: 'Jesaja 40,3',
    otText: 'Eine Stimme ruft: In der Wüste bereitet den Weg des HERRN, ebnet in der Steppe eine Straße für unseren Gott!',
    newTestament: 'Matthäus 3,3',
    ntText: 'Das ist nämlich der, von welchem durch den Propheten Jesaja gesagt worden ist, der spricht: »Eine Stimme ruft in der Wüste: Bereitet den Weg des Herrn, macht seine Pfade gerade!«',
    description: 'Johannes der Täufer bereitete das Volk auf das Kommen Jesu vor.'
  },
  {
    id: '11',
    category: ProphecyCategory.LEBEN,
    title: 'Licht in Galiläa',
    oldTestament: 'Jesaja 8,23',
    otText: 'Wie er in der früheren Zeit das Land Sebulon und das Land Naphtali gering gemacht hat, so wird er es in der künftigen zu Ehren bringen, den Weg am Meer, jenseits des Jordan, das Galiläa der Heiden.',
    newTestament: 'Matthäus 4,15-16',
    ntText: 'Das Land Sebulon und das Land Naphtali, am Weg des Meeres, jenseits des Jordan, das Galiläa der Heiden, das Volk, das in der Finsternis saß, hat ein großes Licht gesehen.',
    description: 'Jesus wirkte hauptsächlich in Galiläa, einer verachteten Region.'
  },
  {
    id: '12',
    category: ProphecyCategory.LEBEN,
    title: 'Wundertaten des Messias',
    oldTestament: 'Jesaja 35,5-6',
    otText: 'Dann werden die Augen der Blinden aufgetan und die Ohren der Tauben geöffnet werden; dann wird der Lahme springen wie ein Hirsch und die Zunge des Stummen lobsingen.',
    newTestament: 'Matthäus 11,5',
    ntText: 'Blinde werden sehend und Lahme gehen, Aussätzige werden rein und Taube hören, Tote werden auferweckt, und Armen wird das Evangelium verkündigt.',
    description: 'Die spezifischen Wunder Jesu waren Kennzeichen des Messias.'
  },
  {
    id: '13',
    category: ProphecyCategory.LEBEN,
    title: 'Lehren in Gleichnissen',
    oldTestament: 'Psalm 78,2',
    otText: 'Ich will meinen Mund auftun zu einem Spruch, will Rätsel verkünden aus der Vorzeit.',
    newTestament: 'Matthäus 13,34-35',
    ntText: 'Das alles redete Jesus in Gleichnissen zur Volksmenge... damit erfüllt würde, was durch den Propheten geredet ist, der spricht: »Ich will meinen Mund in Gleichnissen öffnen«.',
    description: 'Seine Lehrmethode war prophetisch angekündigt.'
  },
  {
    id: '14',
    category: ProphecyCategory.LEBEN,
    title: 'Einzug auf einem Esel',
    oldTestament: 'Sacharja 9,9',
    otText: 'Frohlocke sehr, du Tochter Zion; jauchze, du Tochter Jerusalem! Siehe, dein König kommt zu dir; ein Gerechter und ein Retter ist er, demütig und reitend auf einem Esel, und zwar auf einem Füllen, einem Jungen der Eselin.',
    newTestament: 'Johannes 12,14-15',
    ntText: 'Jesus aber fand einen jungen Esel und setzte sich darauf, wie geschrieben steht: »Fürchte dich nicht, Tochter Zion! Siehe, dein König kommt, sitzend auf dem Füllen einer Eselin«.',
    description: 'Der demütige König zieht in Jerusalem ein.'
  },
  {
    id: '15',
    category: ProphecyCategory.LEBEN,
    title: 'Eifer für das Haus Gottes',
    oldTestament: 'Psalm 69,10',
    otText: 'Denn der Eifer für dein Haus hat mich verzehrt, und die Schmähungen derer, die dich schmähen, sind auf mich gefallen.',
    newTestament: 'Johannes 2,17',
    ntText: 'Da dachten seine Jünger daran, dass geschrieben steht: »Der Eifer um dein Haus hat mich verzehrt«.',
    description: 'Jesus reinigte den Tempel mit göttlichem Eifer.'
  },

  // --- LEIDEN & TOD ---
  {
    id: '20',
    category: ProphecyCategory.LEIDEN,
    title: 'Verrat durch einen Freund',
    oldTestament: 'Psalm 41,10',
    otText: 'Auch mein Freund, dem ich vertraute, der mein Brot aß, hat die Ferse gegen mich erhoben.',
    newTestament: 'Johannes 13,18',
    ntText: 'Ich rede nicht von euch allen; ich weiß, welche ich erwählt habe. Doch muss die Schrift erfüllt werden: »Der mit mir das Brot isst, hat seine Ferse gegen mich erhoben«.',
    description: 'Judas, einer der Zwölf, verriet ihn.'
  },
  {
    id: '21',
    category: ProphecyCategory.LEIDEN,
    title: 'Verkauf für 30 Silberlinge',
    oldTestament: 'Sacharja 11,12',
    otText: 'Und ich sprach zu ihnen: Wenn es gut ist in euren Augen, so gebt mir meinen Lohn; wenn nicht, so lasst es bleiben! Da wogen sie mir meinen Lohn ab: 30 Silberlinge.',
    newTestament: 'Matthäus 26,15',
    ntText: 'Und er sprach: Was wollt ihr mir geben, wenn ich ihn euch verrate? Und sie setzten ihm 30 Silberlinge fest.',
    description: 'Der Preis eines Sklaven (2. Mose 21,32) war der Lohn für den Verrat.'
  },
  {
    id: '22',
    category: ProphecyCategory.LEIDEN,
    title: 'Geld im Haus des Töpfers',
    oldTestament: 'Sacharja 11,13',
    otText: 'Und der HERR sprach zu mir: Wirf ihn dem Töpfer hin, den herrlichen Preis, dessen ich von ihnen wert geachtet wurde! Und ich nahm die 30 Silberlinge und warf sie ins Haus des HERRN für den Töpfer.',
    newTestament: 'Matthäus 27,7',
    ntText: 'Sie hielten aber Rat und kauften dafür den Acker des Töpfers als Begräbnisstätte für die Fremden.',
    description: 'Judas warf das Geld in den Tempel, und die Priester kauften damit den Töpferacker.'
  },
  {
    id: '23',
    category: ProphecyCategory.LEIDEN,
    title: 'Misshandlung und Anspucken',
    oldTestament: 'Jesaja 50,6',
    otText: 'Ich bot meinen Rücken den Schlagenden und meine Wangen den Raufenden; mein Angesicht verbarg ich nicht vor Schmach und Speichel.',
    newTestament: 'Matthäus 26,67',
    ntText: 'Da spuckten sie ihm ins Angesicht und schlugen ihn mit Fäusten; andere aber schlugen ihn ins Gesicht.',
    description: 'Jesus ertrug geduldig die schändliche Behandlung.'
  },
  {
    id: '24',
    category: ProphecyCategory.LEIDEN,
    title: 'Schweigen vor Anklägern',
    oldTestament: 'Jesaja 53,7',
    otText: 'Er wurde misshandelt, aber er beugte sich und tat seinen Mund nicht auf, wie ein Lamm, das zur Schlachtbank geführt wird, und wie ein Schaf, das vor seinem Scherer verstummt und seinen Mund nicht auftut.',
    newTestament: 'Matthäus 27,12-14',
    ntText: 'Und als er von den obersten Priestern und den Ältesten verklagt wurde, antwortete er nichts... sodass sich der Statthalter sehr verwunderte.',
    description: 'Trotz falscher Anklagen verteidigte er sich nicht.'
  },
  {
    id: '25',
    category: ProphecyCategory.LEIDEN,
    title: 'Durchbohrte Hände und Füße',
    oldTestament: 'Psalm 22,17',
    otText: 'Denn Hunde haben mich umgeben, eine Rotte von Übeltätern hat mich umzingelt; sie haben meine Hände und meine Füße durchgraben.',
    newTestament: 'Johannes 20,25',
    ntText: 'Wenn ich nicht an seinen Händen das Nägelmal sehe und meinen Finger in das Nägelmal lege... werde ich nicht glauben.',
    description: 'Eine präzise Beschreibung der Kreuzigung, 1000 Jahre vor Christus.'
  },
  {
    id: '26',
    category: ProphecyCategory.LEIDEN,
    title: 'Unter Verbrecher gerechnet',
    oldTestament: 'Jesaja 53,12',
    otText: 'Darum will ich ihm die Vielen zum Anteil geben... dafür dass er seine Seele dem Tod preisgegeben hat und sich unter die Übeltäter zählen ließ.',
    newTestament: 'Markus 15,27-28',
    ntText: 'Und mit ihm kreuzigten sie zwei Räuber, einen zu seiner Rechten und einen zu seiner Linken. Da wurde die Schrift erfüllt, die spricht: »Und er ist unter die Gesetzlosen gerechnet worden«.',
    description: 'Er starb zwischen zwei Kriminellen.'
  },
  {
    id: '27',
    category: ProphecyCategory.LEIDEN,
    title: 'Kleiderverteilung durch Los',
    oldTestament: 'Psalm 22,19',
    otText: 'Sie teilen meine Kleider unter sich und werfen das Los über mein Gewand.',
    newTestament: 'Johannes 19,23-24',
    ntText: 'Da sprachen sie zueinander: Lasst uns den nicht zertrennen, sondern darum losen, wem er gehören soll! — damit die Schrift erfüllt würde.',
    description: 'Die Soldaten teilten seine Kleider, losten aber um das Untergewand.'
  },
  {
    id: '28',
    category: ProphecyCategory.LEIDEN,
    title: 'Galle und Essig',
    oldTestament: 'Psalm 69,22',
    otText: 'Und sie gaben mir Galle zur Speise und Essig zu trinken in meinem Durst.',
    newTestament: 'Matthäus 27,34',
    ntText: 'Gaben sie ihm Essig mit Galle vermischt zu trinken; und als er es schmeckte, wollte er nicht trinken.',
    description: 'Sogar das Getränk am Kreuz war vorhergesagt.'
  },
  {
    id: '29',
    category: ProphecyCategory.LEIDEN,
    title: 'Verlassen von Gott',
    oldTestament: 'Psalm 22,2',
    otText: 'Mein Gott, mein Gott, warum hast du mich verlassen? Fern von meiner Rettung sind die Worte meiner Klage.',
    newTestament: 'Matthäus 27,46',
    ntText: 'Und um die neunte Stunde rief Jesus mit lauter Stimme: Eli, Eli, lama sabachthani? Das heißt: Mein Gott, mein Gott, warum hast du mich verlassen?',
    description: 'Der Schrei der Gottverlassenheit am Kreuz.'
  },
  {
    id: '30',
    category: ProphecyCategory.LEIDEN,
    title: 'Kein Knochen gebrochen',
    oldTestament: 'Psalm 34,21',
    otText: 'Er bewahrt ihm alle seine Gebeine, dass nicht eines von ihnen zerbrochen wird.',
    newTestament: 'Johannes 19,33',
    ntText: 'Als sie aber zu Jesus kamen und sahen, dass er schon gestorben war, zerschlugen sie ihm die Beine nicht.',
    description: 'Als wahres Passahlamm (2. Mose 12,46) blieben seine Gebeine unversehrt.'
  },
  {
    id: '31',
    category: ProphecyCategory.LEIDEN,
    title: 'Durchbohrte Seite',
    oldTestament: 'Sacharja 12,10',
    otText: 'Und sie werden auf mich blicken, den sie durchbohrt haben, und sie werden um ihn klagen, wie man klagt um den einzigen Sohn.',
    newTestament: 'Johannes 19,34',
    ntText: 'Sondern einer der Kriegsknechte stieß mit einem Speer in seine Seite, und sogleich floss Blut und Wasser heraus.',
    description: 'Der Lanzenstich in die Seite bestätigte seinen Tod.'
  },
  {
    id: '32',
    category: ProphecyCategory.LEIDEN,
    title: 'Begräbnis beim Reichen',
    oldTestament: 'Jesaja 53,9',
    otText: 'Und man bestimmte sein Grab bei Gottlosen, aber bei einem Reichen war er in seinem Tod, weil er kein Unrecht getan hatte und kein Betrug in seinem Mund gewesen war.',
    newTestament: 'Matthäus 27,57-60',
    ntText: 'Als es nun Abend geworden war, kam ein reicher Mann von Arimathäa namens Joseph... und bat um den Leib Jesu... und legte ihn in sein neues Grab.',
    description: 'Joseph von Arimathäa, ein reicher Mann, bestattete ihn.'
  },

  // --- AUFERSTEHUNG & HERRLICHKEIT ---
  {
    id: '40',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Auferstehung',
    oldTestament: 'Psalm 16,10',
    otText: 'Denn du wirst meine Seele dem Totenreich nicht preisgeben und nicht zulassen, dass dein Getreuer die Verwesung sieht.',
    newTestament: 'Apostelgeschichte 2,31',
    ntText: 'Hat er voraussehend von der Auferstehung des Christus geredet, dass seine Seele nicht dem Totenreich preisgegeben worden ist und auch sein Fleisch die Verwesung nicht gesehen hat.',
    description: 'Der Tod konnte ihn nicht halten.'
  },
  {
    id: '41',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Himmelfahrt',
    oldTestament: 'Psalm 68,19',
    otText: 'Du bist zur Höhe aufgestiegen, hast Gefangene weggeführt; du hast Gaben empfangen unter den Menschen.',
    newTestament: 'Epheser 4,8',
    ntText: 'Darum heißt es: »Er ist in die Höhe hinaufgestiegen und hat Gefangene mit sich geführt und hat den Menschen Gaben gegeben«.',
    description: 'Seine Rückkehr in die himmlische Herrlichkeit.'
  },
  {
    id: '42',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Sitz zur Rechten Gottes',
    oldTestament: 'Psalm 110,1',
    otText: 'Der HERR sprach zu meinem Herrn: Setze dich zu meiner Rechten, bis ich deine Feinde hinlege als Schemel für deine Füße!',
    newTestament: 'Hebräer 1,3',
    ntText: 'Nachdem er die Reinigung von unseren Sünden durch sich selbst vollbracht hat, sich gesetzt zur Rechten der Majestät in der Höhe.',
    description: 'Die Erhöhung über alle Mächte und Gewalten.'
  },
  {
    id: '43',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Sohn Gottes',
    oldTestament: 'Psalm 2,7',
    otText: 'Ich will den Ratschluß des HERRN verkünden; er hat zu mir gesagt: »Du bist mein Sohn, heute habe ich dich gezeugt!«',
    newTestament: 'Apostelgeschichte 13,33',
    ntText: 'Dass Gott dies uns, ihren Kindern, erfüllt hat, indem er Jesus auferweckte, wie auch im zweiten Psalm geschrieben steht: »Du bist mein Sohn, heute habe ich dich gezeugt«.',
    description: 'Die Auferstehung bestätigte seine Gottessohnschaft.'
  },
  {
    id: '44',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Priester nach der Weise Melchisedeks',
    oldTestament: 'Psalm 110,4',
    otText: 'Der HERR hat geschworen, und es wird ihn nicht gereuen: »Du bist Priester in Ewigkeit nach der Weise Melchisedeks!«',
    newTestament: 'Hebräer 5,6',
    ntText: 'Wie er auch an einer anderen Stelle spricht: »Du bist Priester in Ewigkeit nach der Weise Melchisedeks«.',
    description: 'Jesus ist unser ewiger Hohepriester.'
  },

  // --- ZEITPLAN (Liebi Spezialität) ---
  {
    id: '50',
    category: ProphecyCategory.ZEITPLAN,
    title: 'Die 70 Jahrwochen (Zeitpunkt)',
    oldTestament: 'Daniel 9,25',
    otText: 'So wisse und verstehe: Vom Erlass des Befehls, Jerusalem wiederherzustellen und zu bauen, bis auf den Messias, den Fürsten, vergehen 7 Wochen und 62 Wochen.',
    newTestament: 'Lukas 19,42',
    ntText: 'Wenn doch auch du erkannt hättest, wenigstens noch an diesem deinem Tag, was zu deinem Frieden dient! Nun aber ist es vor deinen Augen verborgen.',
    description: 'Roger Liebi berechnet den Einzug Jesu in Jerusalem (Palmsonntag) exakt auf das Ende der 69. Jahrwoche (173.880 Tage nach dem Befehl des Artaxerxes).'
  },
  {
    id: '51',
    category: ProphecyCategory.ZEITPLAN,
    title: 'Messias wird "ausgerottet"',
    oldTestament: 'Daniel 9,26',
    otText: 'Und nach den 62 Wochen wird der Messias ausgerottet werden und nichts haben.',
    newTestament: 'Matthäus 27,50',
    ntText: 'Jesus aber schrie nochmals mit lauter Stimme und gab den Geist auf.',
    description: 'Der Tod des Messias musste VOR der Zerstörung des Tempels (70 n. Chr.) geschehen.'
  },
  {
    id: '52',
    category: ProphecyCategory.ZEITPLAN,
    title: 'Zerstörung von Stadt und Tempel',
    oldTestament: 'Daniel 9,26',
    otText: 'Und das Volk des kommenden Fürsten wird die Stadt und das Heiligtum zerstören, und ihr Ende ist in der Überflutung.',
    newTestament: 'Lukas 21,24',
    ntText: 'Und sie werden fallen durch die Schärfe des Schwertes und gefangen weggeführt werden unter alle Heiden; und Jerusalem wird zertreten werden von den Heiden.',
    description: 'Folgte auf die Ablehnung des Messias: Die Zerstörung Jerusalems im Jahr 70 n. Chr.'
  }
];