import akatsuki_images from './images/akatsuki';
import byakuya_images from './images/byakuya';
import carmine_images from './images/carmine';
import chaos_images from './images/chaos';
import eltnum_images from './images/eltnum';
import enkidu_images from './images/enkidu';
import gordeau_images from './images/gordeau';
import hilda_images from './images/hilda';
import hyde_images from './images/hyde';
import linne_images from './images/linne';
import merkava_images from './images/merkava';
import mika_images from './images/mika';
import nanase_images from './images/nanase';
import orie_images from './images/orie';
import phonon_images from './images/phonon';
import seth_images from './images/seth';
import vatista_images from './images/vatista';
import wagner_images from './images/wagner';
import waldstein_images from './images/waldstein';
import yuzuriha_images from './images/yuzuriha';

export default {
  name: 'Under Night In-Birth Exe:Late[st]',
  shortName: 'UNIST',
  inputCategories: [
    'Normal Moves',
    'Command Normals',
    'Dash Normals',
    'Universal Mechanics',
    'Special Moves',
    'Infinite Worth',
    'Infinite Worth EXS',
  ],
  characters: [
    require('./movespecs/akatsuki'),
    require('./movespecs/byakuya'),
    require('./movespecs/carmine'),
    require('./movespecs/chaos'),
    require('./movespecs/eltnum'),
    require('./movespecs/enkidu'),
    require('./movespecs/gordeau'),
    require('./movespecs/hilda'),
    require('./movespecs/hyde'),
    require('./movespecs/linne'),
    require('./movespecs/merkava'),
    require('./movespecs/mika'),
    require('./movespecs/nanase'),
    require('./movespecs/orie'),
    require('./movespecs/phonon'),
    require('./movespecs/seth'),
    require('./movespecs/vatista'),
    require('./movespecs/wagner'),
    require('./movespecs/waldstein'),
    require('./movespecs/yuzuriha'),
  ],
  images: {
    logo: require('./images/UNIST_logo.png'),
    akatsuki: akatsuki_images,
    byakuya: byakuya_images,
    carmine: carmine_images,
    chaos: chaos_images,
    eltnum: eltnum_images,
    enkidu: enkidu_images,
    gordeau: gordeau_images,
    hilda: hilda_images,
    hyde: hyde_images,
    linne: linne_images,
    merkava: merkava_images,
    mika: mika_images,
    nanase: nanase_images,
    orie: orie_images,
    phonon: phonon_images,
    seth: seth_images,
    vatista: vatista_images,
    wagner: wagner_images,
    waldstein: waldstein_images,
    yuzuriha: yuzuriha_images,
  }
}
