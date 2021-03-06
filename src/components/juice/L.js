import * as React from "react";
import { motion } from "framer-motion";

function SvgL(props) {
  return (
    <motion.div 
      initial="initial" animate="fall" variants={props.slideDown}
      className="w-40 relative flex flex-col justify-center items-center z-10 mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 128 258"
        {...props}
      >
        <defs>
          <style>{".L_svg__cls-1{opacity:.3}.L_svg__cls-2{fill:#fff}"}</style>
        </defs>
        <g id="L_svg__Layer_2" data-name="Layer 2">
          <g id="L_svg__L">
            <image
              className="L_svg__cls-1"
              width={43}
              height={62}
              transform="translate(67)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="L_svg__cls-2"
              transform="rotate(-64.95 88.648 31.01)"
              d="M64.21 25.99h48.9v10.03h-48.9z"
            />
            <image
              className="L_svg__cls-1"
              width={76}
              height={20}
              transform="translate(26 238)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAUCAYAAAAnStuxAAAACXBIWXMAAAsSAAALEgHS3X78AAAC40lEQVRYR+2YzW7bRhSFvztDykjln5ow2iCBF0F2Evo6eR2KryM9TmHuiiyMBm7hjmpZcmByOKcLUbIQGKg3XZTx2Qw4Q4KYD/denHtNEq96ubLnNs3MJFFVlT13PnSVZSkzQ89Ekx3umZnNZjObTCa2XC7d4+OjCyHY3d2dAVxeXn77/SB0fX0NwNnZmYqi0NHRUTo/P091XWs2m+kQ3CEw+/Tpk5tOp55t5I2ALM9zD7i2bQcdbXmeC0ht23ZABBogXl1ddfP5PAGCA2BVVTmeQP0AHPfrCMicc5ZSGiQ055xSSuIJ1AOw7tcGiGVZJuhrmJnZfD63uq4ztpB+zLLsp67rzruuO/bej1JK3swGCSylJDPruq5rvPdr7/0yxvjn7ngymXR9XVcG0Bd4zzaajp1zP8cYPwLvvPeFpDFbuIMEBkhS9N5vJIUY45c+oyLQ1HUdJSXoU7KqKlcURR5COAHemtkHM/slpfShfz6RNGLAwMyskXQP3DjnPkv6VdJn4KYoivsQQluWZdrbihCC5Xnu27YdAceSCuAt8F7SGdvoc8/+7v+vJKkB7gAk3bGt4aM8z30IYR8oe2Cnp6d2e3vrRqNRBozM7A0wlnRiZqfAEQMGBjxKSmY2NrM3fUZlm83GXVxc2Gq1AoYL4D/TPsJWq5XG43Fq2zYCjaSvkjbAvSTHwFOSrX247+/8tX+O4/E4rVarvVndAyuKQiGErn9xbWZB0g2Ama2+p6Lf330NNG3bdj0b4Mm4WlVVOVsPVjjn3qeUPgLvzGxvK4bqw7SFEM1sIykAX5xzv6WUfgcC8FCWZQtoZ1yZz+ddXdcNsE4p/ZFlmbqu+2tnXCV5hh1hzxnXNdD0xhVJ7IyrqqratQYPADHGCPztnBtJ+i5aI+dclNTEGA9bo1jXtbRLRb0238DLm+/DeZgWi0WaTqeaTCbdcrlsX8c7tRaLhehhwTfzsP3m6wDxZQPEV/27/gGF3QMu/fHjcQAAAABJRU5ErkJggg=="
            />
            <path className="L_svg__cls-2" d="M32.65 244.85h62.71v6.42H32.65z" />
            <image
              className="L_svg__cls-1"
              width={122}
              height={181}
              transform="translate(3 70)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="L_svg__cls-2"
              d="M118.1 76.49l-3.4 28.62-.59 5.01-4.02 33.86-2.58 21.73-1.86 15.61-7.55 63.53H29.92l-7.55-63.53-1.86-15.61-2.58-21.73-4.02-33.86-.59-5.01-3.4-28.62H118.1z"
            />
            <image
              className="L_svg__cls-1"
              width={34}
              height={35}
              transform="translate(47 204)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsSAAALEgHS3X78AAADwklEQVRYR82Y4VIbOQyAP4eEXCi0DdCWtgzttH3/V+pM2+O4HAcJlBASEveHpJViNmTDTOdOMx57N2v5syzLclLOmf+DtNd9UCcppRQfgWo2+YkzS037hcFbyOBWG0gGFqGdN4FaC6IAVrYQK1rZ0vcAc+Bey1zLQstaSz0KohAtZMAOsA38AfS03tbfF8AMuAMmwFTbMxxs8RhMLUiwQgsB6AI7wDPgBbCnpYdAzpHBfwI3Wqx9q7/N0KWrA3rgrAFiC5lxD3gO9IED4JXWBwhYGwG5BYbACLgELvR5CFzhQPOU0oOlqts1BtFFBuoDr4F3wJHWr/T9jupYIEtyjQx8AZwBf2s9QOBukCWbE3YaFCDBJ7YRiEPgPXACfND2EQKxh/jJFu4jY2RJhsAb4BSxpn0HAnCXUlpaogokQHSQmfaRgT8Bn4GPCMQB7h8dfPuan0yAfeAl4k+9ME7cSTmlVDlwuTTmF3vIcpwgEF+AY8RCZgnbviYGY069wzLEPb6jpjgUsAzS0uceMpMjfEmOEVNHM5cBDTzOdLSY/hnirFeIH431ncUb+TDslAjyGniLL8dzfIb2vUkKtS1xS9/dIxAjxGkHiA+NgWlSZ7GPwf3DQA619IFdZBfVQZQSJ9VF+vZxfeY3HRy2asTY0cVjx662m0KYlDA9RJdZtYsfDwkCEW7SNh7Ku9pe6tRQysDYxY+FNu5jwEMQgzGnK51yU2msM4KUHa08FcKkkc4S5D+TEiQmOFUEpDgXNpRGOiOI/WhBxnKJ+9B5UzEA0xOD2BJMCWKdJkjAGSPh+CkwUd8U1zehRp+BGJ1B3OC5xbW+qxIb1otBzPD0YITovMFhKqvEsyYe5UMkFJ8hUdESoIRHxLrdFP3BdI2AczwvsfBuEwMUJOecU0qx8yXwFxKO7aBr6SAWnssgF33MDrkhkhz9CfxQnZcEkLo0wJbmDjklB0hY3kWiYdbOFqYjjPWPEFfAPwjAN60H+v4OXxoggASrTJF1PEcAOogJb/X9Pm6leHBFn7hC0sVT4DvwFQE5Vx1Tiqy+TIyiw46Q2ebwfIHkq/u4pSw5ipn8BWKN01DOVEd01EqWQGp8BdwaQ2RGlsHHTA18AtfAv1oGWl8iVnrgGyar7jV2JtgxvoNYwO405id1FomZ2Aix0Bj3i0XOudotJitveg1ueTFHgWVnnyBAlqNaRF1522ty5Yx5RRvPSeNxDh4/yuOhCuerIGANSPXR4/8ElHHEgKxeewGHhiBRAtSqHCVDs8GjbAzyu+QXxwDDK8vFy8gAAAAASUVORK5CYII="
            />
            <circle cx={64.01} cy={221.74} r={10.91} fill="#231f20" />
            <text
              transform="translate(60.39 225.72)"
              fontSize={12}
              fontFamily="Montserrat-Bold,Montserrat"
              fontWeight={700}
              fill="#fff"
            >
              {"L"}
            </text>
            <path
              className={`fill-${props.flavor} transition-all duration-300`}
              d="M114.7 105.11l-.59 5.01-4.02 33.86-2.58 21.73h-87l-2.58-21.73-4.02-33.86-.59-5.01H114.7z"
            />
            <g>
              <image
                className="L_svg__cls-1"
                width={122}
                height={57}
                transform="translate(3 15)"
                xlinkHref="data:image/png;base64,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"
              />
              <path
                className="L_svg__cls-2"
                d="M118.1 65.44H9.92l.22-4.78a54.76 54.76 0 0152.41-38.88h2.92a54.76 54.76 0 0152.41 38.88z"
              />
            </g>
            <g>
              <image
                className="L_svg__cls-1"
                width={128}
                height={24}
                transform="translate(0 59)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAYCAYAAAAyC/XlAAAACXBIWXMAAAsSAAALEgHS3X78AAADd0lEQVRoQ+2azW7bRhRGzx2SEtzYcsxFGyTwIshOQl/HryPxdaTHKcxdkYXRwC1QqpJlGxKH92bBES0bSpFlGM8BCEGkCC2+b2bun5gZkddLeuymiIiZURSFHHse6RfT6dREBDuy2uXwnojIbDaT8Xgsy+XSbbdbV1WVrFYrAbi8vHz5fuQH5ObmBoDz83PL89yGw6FeXFxoWZY2m83s0AiHBpCrqys3mUwS2p1hAKRZliWAq+s67gY9IssyA7Su6wbwwA7w19fXzXw+V8DgwABFUTiehP8FOA2fAyB1zomqRhP0AOecqarxJPwDsAmfO8BPp1OFEAOIiMzncynLMqUV/W2apr82TXPRNM1pkiQDVU1EJBqgB6iqiUjTNM0uSZJNkiRL7/0/+8fj8bgJcZ6lACHgS2hX+6lz7jfv/SfgfZIkuZm9oTVLNEA/MDPzSZLcm1nlvf8SdnAP7Mqy9GamEI6AoihcnudZVVVnwDsR+Sgiv6vqx/D9zMwGRAP0BRORnZndAbfOuc9m9oeZfQZu8zy/q6qqnk6n2qWBVVVJlmVJXdcD4NTMcuAd8MHMzml3B3f07yI/GmpmO2AFYGYr2phukGVZUlVVt5A7A4xGI3l8fHRAamZD4A1wBpyLyFtgSDRAX1BgGwL8dTjCh7R6u9FoJOv1GnhRCAqpnnPOOVVNgYx25Q+DKaIB+oGGeH1Aq2EaNHV1XcvJyUn3w6OVQDOTECU6WtEPr0g/6DQLWh6N36Kgr5xv9QL2hQR9cUX6wTPdzMycc4cV4I5nBsiyzOq6VlVV2ipSTVs52oYzJe4Y/UCBLa12NeCDphpKxB2dAdbrtWVZpoAXkS1wH/LIVXBOTAP7g9KKvwLuROSeNivwgK7X684EnQHyPLeqqprw4kZEKjO7BRCRdSwE9YpnhaCg5QbY1XXdBK2Bp2aQFEWR0fYBcufcB1X9BLwXka4UHHsB/SAc9l5E7s2sAr445/5U1b+ACniYTqc1YPtmEPP5vCnLcgdsVPXvNE2taZp/980gM0uIO0Bf+FYzaAPsQjMIM2PfDLKiKPbtwwcA770H/nPODcwstoN7xL4d7JzzZrbz3h+2g31ZlrZPCeJAyE/K9w6EHKaBtlgsdDKZ2Hg8bpbLZR1HwvrJ/42ELRYLI4gPL2YCu5sSh0J/Jr57KDTy+vgKrAxAGiMemjsAAAAASUVORK5CYII="
              />
              <path className="L_svg__cls-2" d="M6.75 65.44h114.51v11.05H6.75z" />
            </g>
          </g>
        </g>
      </svg>
      <div className="w-24 h-8 px-1 absolute rounded-lg shadow-md bg-white bg-opacity-50 flex items-center justify-center">
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center text-xs font-bold">{props.name}</p>
      </div>
    </motion.div>
  );
}

export default SvgL;