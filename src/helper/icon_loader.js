import requiredMaskIcon from '../assets/images/required-mask.png';
import recommendedMaskIcon from '../assets/images/recommended-mask.png';
import requiredTowelIcon from '../assets/images/required-towel.png';
import recommendedTowelIcon from '../assets/images/recommended-towel.png';
import partialFountainIcon from '../assets/images/partial-fountain.png';
import forbiddenFountainIcon from '../assets/images/forbidden-fountain.png';
import requiredLockerroomIcon from '../assets/images/required-lockerroom.png';
import partialLockerroomIcon from '../assets/images/partial-lockerroom.png';
import forbiddenLockerroomIcon from '../assets/images/forbidden-lockerroom.png';

const ICON_MAP = {
  "mask": {
    "required": requiredMaskIcon,
    "recommended": recommendedMaskIcon,
  },
  "towel": {
    "required": requiredTowelIcon,
    "recommended": recommendedTowelIcon,
  },
  "fountain": {
    "partial": partialFountainIcon,
    "not_allowed": forbiddenFountainIcon,
  },
  "locker_room": {
    "allowed": requiredLockerroomIcon,
    "partial": partialLockerroomIcon,
    "closed": forbiddenLockerroomIcon,
  }
};

export default function loadIcon(resource, status) {
  return ICON_MAP[resource][status];
}
