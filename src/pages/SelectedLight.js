
import wftr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 front up right.svg';
import wftl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 front up left.svg';
import wfbr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 front low right.svg';
import wfbl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 front low left.svg';
import wbtr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 back up right.svg';
import wbtl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 back up left.svg';
import wbbr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 back low right.svg';
import wbbl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Wide 1 back low left.svg';

import sftr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 front up right.svg';
import sftl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 front up left.svg';
import sfbr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 front low right.svg';
import sfbl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 front low left.svg';
import sbtr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 back up right.svg';
import sbtl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 back up left.svg';
import sbbr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 back low right.svg';
import sbbl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Spot 1 back low left.svg';

import hftr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 front up right copy.svg';
import hftl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 front up left copy.svg';
import hfbr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 front low right copy.svg';
import hfbl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 front low left copy.svg';
import hbtr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 back up right copy.svg';
import hbtl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 back up left copy.svg';
import hbbr2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 back low right copy.svg';
import hbbl2 from '../assets/transparent lights/Zaurak 4-30_all_20231215_Hybrid 1 back low left copy.svg';

function SelectedLight({ position, alreadyExists }) {

    if (alreadyExists === true) {
        return
    }

    const type = position.type;
    const front = position.position[0];
    const top = position.position[1];
    const left = position.position[2];

    if (type==="" || front==="" || top==="" || left==="") {
        return
    }
  
    if (type == "wide") {
      if (front === "front") {
        if (top === "top") {
          if (left === "left") {
            var image = wftr2
          } else {
            var image = wftl2
          }
        } else {
          if (left === "left") {
            var image = wfbr2
          } else {
            var image = wfbl2
          }
        }
      } else {
        if (top === "top") {
          if (left === "left") {
            var image = wbtl2
          } else {
            var image = wbtr2
          }
        } else {
          if (left === "left") {
            var image = wbbl2
          } else {
            var image = wbbr2
          }
        }
      }
    } else if (type == "spot") {
      if (front === "front") {
        if (top === "top") {
          if (left === "left") {
            var image = sftr2
          } else {
            var image = sftl2
          }
        } else {
          if (left === "left") {
            var image = sfbr2
          } else {
            var image = sfbl2
          }
        }
      } else {
        if (top === "top") {
          if (left === "left") {
            var image = sbtl2
          } else {
            var image = sbtr2
          }
        } else {
          if (left === "left") {
            var image = sbbl2
          } else {
            var image = sbbr2
          }
        }
      }
    } else {
      if (front === "front") {
        if (top === "top") {
          if (left === "left") {
            var image = hftl2
          } else {
            var image = hftr2
          }
        } else {
          if (left === "left") {
            var image = hfbr2
          } else {
            var image = hfbl2
          }
        }
      } else {
        if (top === "top") {
          if (left === "left") {
            var image = hbtl2
          } else {
            var image = hbtr2
          }
        } else {
          if (left === "left") {
            var image = hbbl2
          } else {
            var image = hbbr2
          }
        }
      }
    
    }

    return (
        <div
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            zIndex: 1,
            maxWidth: '380px',
            maxHeight: '380px'
        }}
        >
        <img
            src={image}
            style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            }}
        />
        </div>
    );
}

export default SelectedLight;