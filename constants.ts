import { Prophecy, ProphecyCategory } from './types';

// A curated list representing the core arguments from Roger Liebi's works.
// While not all 300 are hardcoded here due to size constraints, this covers the most significant ones.
export const INITIAL_PROPHECIES: Prophecy[] = [
  // HERKUNFT
  {
    id: '1',
    category: ProphecyCategory.HERKUNFT,
    title: 'Der Same der Frau',
    oldTestament: '1. Mose 3,15',
    otText: 'Und ich werde Feindschaft setzen zwischen dir und der Frau...',
    newTestament: 'Galater 4,4',
    ntText: '...sandte Gott seinen Sohn, geboren von einer Frau...',
    description: 'Die erste Verheißung (Protevangelium): Der Erlöser wird ohne das Zutun eines Mannes geboren (Jungfrauengeburt).'
  },
  {
    id: '2',
    category: ProphecyCategory.HERKUNFT,
    title: 'Nachkomme Abrahams',
    oldTestament: '1. Mose 12,3; 22,18',
    newTestament: 'Matthäus 1,1; Galater 3,16',
    description: 'Der Messias muss ein Jude sein, aus der Linie Abrahams.'
  },
  {
    id: '3',
    category: ProphecyCategory.HERKUNFT,
    title: 'Stamm Juda',
    oldTestament: '1. Mose 49,10',
    newTestament: 'Lukas 3,33; Hebräer 7,14',
    description: 'Das Zepter wird nicht von Juda weichen. Der Herrscher kommt aus diesem Stamm.'
  },
  {
    id: '4',
    category: ProphecyCategory.HERKUNFT,
    title: 'Sohn Davids',
    oldTestament: '2. Samuel 7,12-13; Jeremia 23,5',
    newTestament: 'Matthäus 1,1; 9,27',
    description: 'Er muss aus der königlichen Linie Davids stammen, um Anspruch auf den Thron zu haben.'
  },
  {
    id: '5',
    category: ProphecyCategory.HERKUNFT,
    title: 'Geburt in Bethlehem',
    oldTestament: 'Micha 5,1 (bzw. 5,2)',
    otText: 'Und du, Bethlehem Efrata... aus dir wird mir hervorkommen, der Herrscher...',
    newTestament: 'Matthäus 2,1; Lukas 2,4-7',
    description: 'Der genaue Geburtsort wurde 700 Jahre vorher präzise benannt.'
  },
  {
    id: '6',
    category: ProphecyCategory.HERKUNFT,
    title: 'Geburt von einer Jungfrau',
    oldTestament: 'Jesaja 7,14',
    newTestament: 'Matthäus 1,18-23',
    description: 'Ein Zeichen vom Herrn selbst: Die "Almah" (junge Frau/Jungfrau) wird schwanger werden.'
  },
  {
    id: '7',
    category: ProphecyCategory.HERKUNFT,
    title: 'Anbetung durch Könige',
    oldTestament: 'Psalm 72,10-11',
    newTestament: 'Matthäus 2,1-11',
    description: 'Könige werden Geschenke bringen und ihn anbeten (Die Weisen aus dem Morgenland).'
  },
  
  // LEBEN
  {
    id: '10',
    category: ProphecyCategory.LEBEN,
    title: 'Vorläufer (Johannes der Täufer)',
    oldTestament: 'Jesaja 40,3; Maleachi 3,1',
    newTestament: 'Matthäus 3,1-3',
    description: 'Eine Stimme ruft in der Wüste, um den Weg des Herrn zu bereiten.'
  },
  {
    id: '11',
    category: ProphecyCategory.LEBEN,
    title: 'Dienst in Galiläa',
    oldTestament: 'Jesaja 8,23 - 9,1',
    newTestament: 'Matthäus 4,12-16',
    description: 'Das Licht wird im "Galiläa der Heiden" aufleuchten.'
  },
  {
    id: '12',
    category: ProphecyCategory.LEBEN,
    title: 'Wundertaten',
    oldTestament: 'Jesaja 35,5-6',
    newTestament: 'Matthäus 11,2-5',
    description: 'Blinde sehen, Taube hören, Lahme springen.'
  },
  {
    id: '13',
    category: ProphecyCategory.LEBEN,
    title: 'Lehren in Gleichnissen',
    oldTestament: 'Psalm 78,2',
    newTestament: 'Matthäus 13,34',
    description: 'Ich will meinen Mund auftun in Sprüchen.'
  },
  {
    id: '14',
    category: ProphecyCategory.LEBEN,
    title: 'Einzug auf einem Esel',
    oldTestament: 'Sacharja 9,9',
    newTestament: 'Matthäus 21,1-11',
    description: 'Siehe, dein König kommt zu dir... reitend auf einem Esel.'
  },
  {
    id: '15',
    category: ProphecyCategory.LEBEN,
    title: 'Eifer für das Haus Gottes',
    oldTestament: 'Psalm 69,10',
    newTestament: 'Johannes 2,17',
    description: 'Tempelreinigung: Der Eifer um dein Haus hat mich verzehrt.'
  },

  // LEIDEN
  {
    id: '20',
    category: ProphecyCategory.LEIDEN,
    title: 'Verrat durch einen Freund',
    oldTestament: 'Psalm 41,10',
    newTestament: 'Markus 14,10',
    description: 'Sogar mein Freund, dem ich vertraute... hat die Ferse gegen mich erhoben.'
  },
  {
    id: '21',
    category: ProphecyCategory.LEIDEN,
    title: 'Verkauf für 30 Silberlinge',
    oldTestament: 'Sacharja 11,12',
    newTestament: 'Matthäus 26,15',
    description: 'Der Preis eines Sklaven wurde für den Schöpfer bezahlt.'
  },
  {
    id: '22',
    category: ProphecyCategory.LEIDEN,
    title: 'Geld im Haus des Töpfers',
    oldTestament: 'Sacharja 11,13',
    newTestament: 'Matthäus 27,3-7',
    description: 'Das Blutgeld wurde hingeworfen und der Acker eines Töpfers gekauft.'
  },
  {
    id: '23',
    category: ProphecyCategory.LEIDEN,
    title: 'Schweigen vor Anklägern',
    oldTestament: 'Jesaja 53,7',
    newTestament: 'Matthäus 27,12-14',
    description: 'Wie ein Lamm, das zur Schlachtbank geführt wird, tat er seinen Mund nicht auf.'
  },
  {
    id: '24',
    category: ProphecyCategory.LEIDEN,
    title: 'Verspottung',
    oldTestament: 'Psalm 22,7-8',
    newTestament: 'Matthäus 27,39-43',
    description: 'Alle, die mich sehen, spotten über mich... "Er hat auf den HERRN vertraut, der rette ihn!"'
  },
  {
    id: '25',
    category: ProphecyCategory.LEIDEN,
    title: 'Durchbohrte Hände und Füße',
    oldTestament: 'Psalm 22,17',
    newTestament: 'Johannes 20,25-27',
    description: 'Eine Beschreibung der Kreuzigung, Jahrhunderte bevor diese Strafe erfunden wurde.'
  },
  {
    id: '26',
    category: ProphecyCategory.LEIDEN,
    title: 'Unter Verbrecher gerechnet',
    oldTestament: 'Jesaja 53,12',
    newTestament: 'Markus 15,27-28',
    description: 'Er wurde mit zwei Räubern gekreuzigt.'
  },
  {
    id: '27',
    category: ProphecyCategory.LEIDEN,
    title: 'Kleiderverteilung durch Los',
    oldTestament: 'Psalm 22,19',
    newTestament: 'Johannes 19,23-24',
    description: 'Römische Soldaten warfen das Los über sein ungenähtes Gewand.'
  },
  {
    id: '28',
    category: ProphecyCategory.LEIDEN,
    title: 'Galle und Essig',
    oldTestament: 'Psalm 69,22',
    newTestament: 'Matthäus 27,34',
    description: 'Sie gaben mir Galle zur Speise und Essig für meinen Durst.'
  },
  {
    id: '29',
    category: ProphecyCategory.LEIDEN,
    title: 'Kein Knochen gebrochen',
    oldTestament: 'Psalm 34,21; 2. Mose 12,46',
    newTestament: 'Johannes 19,33',
    description: 'Entgegen römischer Sitte wurden ihm die Beine nicht gebrochen, da er bereits tot war.'
  },
  {
    id: '30',
    category: ProphecyCategory.LEIDEN,
    title: 'Durchbohrte Seite',
    oldTestament: 'Sacharja 12,10',
    newTestament: 'Johannes 19,34',
    description: 'Sie werden auf mich blicken, den sie durchbohrt haben.'
  },

  // AUFERSTEHUNG
  {
    id: '40',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Auferstehung',
    oldTestament: 'Psalm 16,10',
    newTestament: 'Apostelgeschichte 2,31',
    description: 'Du wirst meine Seele nicht dem Scheol lassen und nicht zugeben, dass dein Frommer die Verwesung sieht.'
  },
  {
    id: '41',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Himmelfahrt',
    oldTestament: 'Psalm 68,19',
    newTestament: 'Lukas 24,51; Epheser 4,8',
    description: 'Du bist zur Höhe aufgestiegen, hast Gefangene weggeführt.'
  },
  {
    id: '42',
    category: ProphecyCategory.AUFERSTEHUNG,
    title: 'Sitz zur Rechten Gottes',
    oldTestament: 'Psalm 110,1',
    newTestament: 'Hebräer 1,3',
    description: 'Setze dich zu meiner Rechten, bis ich deine Feinde lege zum Schemel deiner Füße.'
  },

  // ZEITPLAN (Liebi Spezialität)
  {
    id: '50',
    category: ProphecyCategory.ZEITPLAN,
    title: 'Die 70 Jahrwochen',
    oldTestament: 'Daniel 9,24-27',
    newTestament: 'Galater 4,4',
    description: 'Der genaue Zeitpunkt des Auftretens des Messias (nach 69 Jahrwochen) und sein Tod vor der Zerstörung des Tempels (70 n. Chr.). Roger Liebi berechnet dies auf den Tag genau.'
  }
];