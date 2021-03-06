import * as React from "react";
import { motion } from "framer-motion";

function SvgS(props) {
  return (
    <motion.div 
      initial="initial" animate="fall" variants={props.slideDown}
      className="w-40 relative flex flex-col justify-center items-center z-10 mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 128 198"
        {...props}
      >
        <defs>
          <style>{".S_svg__cls-1{opacity:.3}.S_svg__cls-2{fill:#fff}"}</style>
        </defs>
        <g id="S_svg__Layer_2" data-name="Layer 2">
          <g id="S_svg__S">
            <image
              className="S_svg__cls-1"
              width={43}
              height={62}
              transform="translate(61)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="S_svg__cls-2"
              transform="rotate(-64.95 82.19 31.184)"
              d="M57.74 26.16h48.9v10.03h-48.9z"
            />
            <image
              className="S_svg__cls-1"
              width={76}
              height={20}
              transform="translate(26 178)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAUCAYAAAAnStuxAAAACXBIWXMAAAsSAAALEgHS3X78AAAC40lEQVRYR+2YzW7bRhSFvztDykjln5ow2iCBF0F2Evo6eR2KryM9TmHuiiyMBm7hjmpZcmByOKcLUbIQGKg3XZTx2Qw4Q4KYD/denHtNEq96ubLnNs3MJFFVlT13PnSVZSkzQ89Ekx3umZnNZjObTCa2XC7d4+OjCyHY3d2dAVxeXn77/SB0fX0NwNnZmYqi0NHRUTo/P091XWs2m+kQ3CEw+/Tpk5tOp55t5I2ALM9zD7i2bQcdbXmeC0ht23ZABBogXl1ddfP5PAGCA2BVVTmeQP0AHPfrCMicc5ZSGiQ055xSSuIJ1AOw7tcGiGVZJuhrmJnZfD63uq4ztpB+zLLsp67rzruuO/bej1JK3swGCSylJDPruq5rvPdr7/0yxvjn7ngymXR9XVcG0Bd4zzaajp1zP8cYPwLvvPeFpDFbuIMEBkhS9N5vJIUY45c+oyLQ1HUdJSXoU7KqKlcURR5COAHemtkHM/slpfShfz6RNGLAwMyskXQP3DjnPkv6VdJn4KYoivsQQluWZdrbihCC5Xnu27YdAceSCuAt8F7SGdvoc8/+7v+vJKkB7gAk3bGt4aM8z30IYR8oe2Cnp6d2e3vrRqNRBozM7A0wlnRiZqfAEQMGBjxKSmY2NrM3fUZlm83GXVxc2Gq1AoYL4D/TPsJWq5XG43Fq2zYCjaSvkjbAvSTHwFOSrX247+/8tX+O4/E4rVarvVndAyuKQiGErn9xbWZB0g2Ama2+p6Lf330NNG3bdj0b4Mm4WlVVOVsPVjjn3qeUPgLvzGxvK4bqw7SFEM1sIykAX5xzv6WUfgcC8FCWZQtoZ1yZz+ddXdcNsE4p/ZFlmbqu+2tnXCV5hh1hzxnXNdD0xhVJ7IyrqqratQYPADHGCPztnBtJ+i5aI+dclNTEGA9bo1jXtbRLRb0238DLm+/DeZgWi0WaTqeaTCbdcrlsX8c7tRaLhehhwTfzsP3m6wDxZQPEV/27/gGF3QMu/fHjcQAAAABJRU5ErkJggg=="
            />
            <path className="S_svg__cls-2" d="M32.8 184.68h62.71v6.42H32.8z" />
            <image
              className="S_svg__cls-1"
              width={121}
              height={118}
              transform="translate(4 73)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="S_svg__cls-2"
              d="M118.25 79.52l-2.96 15.57-1.03 5.44-7.93 41.68-.53 2.79-7.55 39.68H30.07L22.52 145l-.53-2.79-7.93-41.68-1.03-5.44-2.96-15.57h108.18z"
            />
            <circle cx={64.16} cy={163.7} r={10.91} fill="#231f20" />
            <text
              transform="translate(60.33 167.68)"
              fontSize={12}
              fontFamily="Montserrat-Bold,Montserrat"
              fontWeight={700}
              fill="#fff"
            >
              {"S"}
            </text>
            <g>
              <image
                className="S_svg__cls-1"
                width={121}
                height={57}
                transform="translate(4 18)"
                xlinkHref="data:image/png;base64,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" 
              />
              <path
                className="S_svg__cls-2"
                d="M118.25 68.47H10.07l.22-4.78A54.76 54.76 0 0162.7 24.8h2.92A54.77 54.77 0 01118 63.69z"
              />
            </g>
            <path
              className={`fill-${props.flavor} transition-all duration-300`}
              d="M115.29 95.09l-1.03 5.44-7.93 41.68H21.99l-7.93-41.68-1.03-5.44h102.26z"        
            />
            <g>
              <image
                className="S_svg__cls-1"
                width={128}
                height={24}
                transform="translate(0 62)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAYCAYAAAAyC/XlAAAACXBIWXMAAAsSAAALEgHS3X78AAADd0lEQVRoQ+2azW7bRhRGzx2SEtzYcsxFGyTwIshOQl/HryPxdaTHKcxdkYXRwC1QqpJlGxKH92bBES0bSpFlGM8BCEGkCC2+b2bun5gZkddLeuymiIiZURSFHHse6RfT6dREBDuy2uXwnojIbDaT8Xgsy+XSbbdbV1WVrFYrAbi8vHz5fuQH5ObmBoDz83PL89yGw6FeXFxoWZY2m83s0AiHBpCrqys3mUwS2p1hAKRZliWAq+s67gY9IssyA7Su6wbwwA7w19fXzXw+V8DgwABFUTiehP8FOA2fAyB1zomqRhP0AOecqarxJPwDsAmfO8BPp1OFEAOIiMzncynLMqUV/W2apr82TXPRNM1pkiQDVU1EJBqgB6iqiUjTNM0uSZJNkiRL7/0/+8fj8bgJcZ6lACHgS2hX+6lz7jfv/SfgfZIkuZm9oTVLNEA/MDPzSZLcm1nlvf8SdnAP7Mqy9GamEI6AoihcnudZVVVnwDsR+Sgiv6vqx/D9zMwGRAP0BRORnZndAbfOuc9m9oeZfQZu8zy/q6qqnk6n2qWBVVVJlmVJXdcD4NTMcuAd8MHMzml3B3f07yI/GmpmO2AFYGYr2phukGVZUlVVt5A7A4xGI3l8fHRAamZD4A1wBpyLyFtgSDRAX1BgGwL8dTjCh7R6u9FoJOv1GnhRCAqpnnPOOVVNgYx25Q+DKaIB+oGGeH1Aq2EaNHV1XcvJyUn3w6OVQDOTECU6WtEPr0g/6DQLWh6N36Kgr5xv9QL2hQR9cUX6wTPdzMycc4cV4I5nBsiyzOq6VlVV2ipSTVs52oYzJe4Y/UCBLa12NeCDphpKxB2dAdbrtWVZpoAXkS1wH/LIVXBOTAP7g9KKvwLuROSeNivwgK7X684EnQHyPLeqqprw4kZEKjO7BRCRdSwE9YpnhaCg5QbY1XXdBK2Bp2aQFEWR0fYBcufcB1X9BLwXka4UHHsB/SAc9l5E7s2sAr445/5U1b+ACniYTqc1YPtmEPP5vCnLcgdsVPXvNE2taZp/980gM0uIO0Bf+FYzaAPsQjMIM2PfDLKiKPbtwwcA770H/nPODcwstoN7xL4d7JzzZrbz3h+2g31ZlrZPCeJAyE/K9w6EHKaBtlgsdDKZ2Hg8bpbLZR1HwvrJ/42ELRYLI4gPL2YCu5sSh0J/Jr57KDTy+vgKrAxAGiMemjsAAAAASUVORK5CYII="
              />
              <path className="S_svg__cls-2" d="M6.9 68.47h114.51v11.05H6.9z" />
            </g>
          </g>
        </g>
      </svg>
      <div className="w-24 h-8 px-1 absolute mt-11 rounded-lg shadow-md bg-white bg-opacity-50 flex items-center justify-center">
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center text-xs font-bold">{props.name}</p>
      </div>
    </motion.div>
  );
}

export default SvgS;