import answer_images from './images/answer';
import axl_images from './images/axl';
import baiken_images from './images/baiken';
import bedman_images from './images/bedman';
import chipp_images from './images/chipp';
import dizzy_images from './images/dizzy';
import elphelt_images from './images/elphelt';
import faust_images from './images/faust';
import ino_images from './images/i-no';
import jacko_images from './images/jack-o';
import jam_images from './images/jam';
import johnny_images from './images/johnny';
import kum_images from './images/kum';
import ky_images from './images/ky';
import leo_images from './images/leo';
import may_images from './images/may';
import millia_images from './images/millia';
import potemkin_images from './images/potemkin';
import ramlethal_images from './images/ramlethal';
import raven_images from './images/raven';
import sin_images from './images/sin';
import slayer_images from './images/slayer';
import sol_images from './images/sol';
import venom_images from './images/venom';
import zato_images from './images/zato';

export default {
  name: 'Guilty Gear Xrd REV 2',
  shortName: 'GGXrd-R2',
  inputCategories: [
    'Normal Moves',
    'Universal Mechanics',
    'Special Moves',
    'Overdrives',
    'Instant Kills'
  ],
  characters: [
    require('./movespecs/answer'),
    require('./movespecs/axl'),
    require('./movespecs/baiken'),
    require('./movespecs/bedman'),
    require('./movespecs/chipp'),
    require('./movespecs/dizzy'),
    require('./movespecs/elphelt'),
    require('./movespecs/faust'),
    require('./movespecs/i-no'),
    require('./movespecs/jack-o'),
    require('./movespecs/jam'),
    require('./movespecs/johnny'),
    require('./movespecs/kum'),
    require('./movespecs/ky'),
    require('./movespecs/leo'),
    require('./movespecs/may'),
    require('./movespecs/millia'),
    require('./movespecs/potemkin'),
    require('./movespecs/ramlethal'),
    require('./movespecs/raven'),
    require('./movespecs/sin'),
    require('./movespecs/slayer'),
    require('./movespecs/sol'),
    require('./movespecs/venom'),
    require('./movespecs/zato'),
  ],
  images: {
    logo: require('./images/GGXRD-R2_logo.png'),
    answer: answer_images,
    axl: axl_images,
    baiken: baiken_images,
    bedman: bedman_images,
    chipp: chipp_images,
    dizzy: dizzy_images,
    elphelt: elphelt_images,
    faust: faust_images,
    ino: ino_images,
    jacko: jacko_images,
    jam: jam_images,
    johnny: johnny_images,
    kum: kum_images,
    ky: ky_images,
    leo: leo_images,
    may: may_images,
    millia: millia_images,
    potemkin: potemkin_images,
    ramlethal: ramlethal_images,
    raven: raven_images,
    sin: sin_images,
    slayer: slayer_images,
    sol: sol_images,
    venom: venom_images,
    zato: zato_images,
  },
};
