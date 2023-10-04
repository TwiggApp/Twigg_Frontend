import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

const Menus = () => {
  return (
    <svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28.8691 8.1319V30.5962H8.13281V8.1319H28.8691ZM27.1411 9.85992H9.86083V28.8682H27.1411V9.85992ZM23.685 20.2281H13.3169V18.5H23.685V20.2281ZM23.685 25.4121H13.3169V23.6841H23.685V25.4121ZM23.685 15.044H13.3169V13.316H23.685V15.044Z"
        fill="#555555"
      />
    </svg>
  );
};

const Settings = () => {
  return (
    <svg width="42" height="42" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5731 7.97913C19.4027 7.98817 20.2291 8.08425 21.0395 8.26511C21.212 8.3036 21.3681 8.39499 21.486 8.52652C21.604 8.65805 21.6779 8.82314 21.6974 8.99873L21.8896 10.7248C21.9167 10.9682 22.0006 11.2017 22.1345 11.4068C22.2683 11.6118 22.4485 11.7825 22.6603 11.9053C22.8722 12.028 23.11 12.0992 23.3544 12.1133C23.5989 12.1274 23.8432 12.0839 24.0678 11.9863L25.6503 11.2911C25.8111 11.2203 25.99 11.2012 26.1621 11.2364C26.3342 11.2717 26.4911 11.3595 26.6112 11.4878C27.7554 12.7098 28.6076 14.1753 29.1036 15.7742C29.1555 15.9423 29.1538 16.1224 29.0987 16.2895C29.0436 16.4566 28.9379 16.6024 28.7962 16.7068L27.3934 17.7422C27.1957 17.8871 27.035 18.0765 26.9242 18.2951C26.8134 18.5136 26.7557 18.7552 26.7557 19.0003C26.7557 19.2454 26.8134 19.487 26.9242 19.7055C27.035 19.9241 27.1957 20.1135 27.3934 20.2584L28.7984 21.2927C28.9403 21.3971 29.0462 21.5431 29.1013 21.7104C29.1564 21.8778 29.158 22.0581 29.1059 22.2264C28.61 23.8251 27.7582 25.2906 26.6146 26.5128C26.4947 26.641 26.3381 26.729 26.1662 26.7644C25.9943 26.7998 25.8156 26.781 25.6549 26.7106L24.0656 26.0132C23.8413 25.9148 23.597 25.8707 23.3525 25.8843C23.108 25.8979 22.8701 25.9689 22.6581 26.0915C22.4461 26.2141 22.266 26.3849 22.1323 26.59C21.9986 26.7952 21.915 27.029 21.8884 27.2724L21.6963 28.9974C21.6771 29.1709 21.6048 29.3343 21.4893 29.4652C21.3738 29.5961 21.2206 29.6881 21.0508 29.7287C19.4135 30.1182 17.7077 30.1182 16.0704 29.7287C15.9004 29.6883 15.747 29.5963 15.6313 29.4654C15.5155 29.3345 15.4431 29.171 15.4238 28.9974L15.2328 27.2747C15.205 27.032 15.1208 26.7992 14.9867 26.595C14.8527 26.3908 14.6727 26.2208 14.4611 26.0988C14.2495 25.9768 14.0122 25.9061 13.7683 25.8924C13.5244 25.8787 13.2807 25.9224 13.0568 26.0199L11.4675 26.7163C11.3066 26.7869 11.1277 26.8059 10.9556 26.7704C10.7834 26.735 10.6266 26.6469 10.5067 26.5184C9.36282 25.2948 8.51138 23.8277 8.01646 22.2275C7.96434 22.0592 7.96595 21.8789 8.02105 21.7116C8.07615 21.5442 8.18201 21.3982 8.32392 21.2938L9.72898 20.2584C9.92662 20.1135 10.0874 19.9241 10.1981 19.7055C10.3089 19.487 10.3667 19.2454 10.3667 19.0003C10.3667 18.7552 10.3089 18.5136 10.1981 18.2951C10.0874 18.0765 9.92662 17.8871 9.72898 17.7422L8.32392 16.709C8.18201 16.6046 8.07615 16.4586 8.02105 16.2913C7.96595 16.124 7.96434 15.9436 8.01646 15.7753C8.51249 14.1765 9.36469 12.7109 10.5089 11.4889C10.629 11.3606 10.7859 11.2728 10.958 11.2376C11.1301 11.2023 11.309 11.2214 11.4698 11.2923L13.0523 11.9874C13.2773 12.085 13.522 12.1284 13.7667 12.1141C14.0115 12.0999 14.2496 12.0285 14.4617 11.9056C14.6739 11.7827 14.8543 11.6117 14.9884 11.4065C15.1225 11.2012 15.2066 10.9673 15.2339 10.7237L15.4261 8.99873C15.4455 8.82279 15.5195 8.65733 15.6376 8.52557C15.7558 8.3938 15.9123 8.30233 16.0851 8.26398C16.9023 8.08336 17.7361 7.9879 18.5731 7.97913ZM18.5731 9.67469C18.0603 9.68072 17.5487 9.72492 17.0425 9.80695L16.9182 10.9113C16.8616 11.4192 16.6866 11.9067 16.4071 12.3345C16.1276 12.7623 15.7515 13.1185 15.3091 13.3744C14.8668 13.6302 14.3705 13.7785 13.8603 13.8074C13.3501 13.8363 12.8402 13.7449 12.3718 13.5406L11.3556 13.0952C10.7095 13.8796 10.1953 14.7638 9.83298 15.7132L10.7339 16.3767C11.1457 16.6792 11.4805 17.0743 11.7113 17.5301C11.9421 17.9859 12.0624 18.4897 12.0625 19.0006C12.0626 19.5115 11.9425 20.0153 11.7119 20.4712C11.4813 20.9271 11.1467 21.3224 10.735 21.625L9.83184 22.2897C10.1936 23.2415 10.709 24.1277 11.3556 24.9144L12.3786 24.4657C12.846 24.2616 13.3548 24.1701 13.864 24.1986C14.3732 24.2271 14.8686 24.3747 15.3103 24.6296C15.7521 24.8845 16.1278 25.2396 16.4073 25.6662C16.6867 26.0928 16.8621 26.5791 16.9193 27.0859L17.0425 28.1982C18.0486 28.3677 19.0761 28.3677 20.081 28.1982L20.2053 27.0859C20.2616 26.5784 20.4364 26.0913 20.7156 25.6639C20.9948 25.2365 21.3706 24.8806 21.8126 24.6252C22.2547 24.3697 22.7506 24.2218 23.2603 24.1933C23.7701 24.1648 24.2794 24.2565 24.7472 24.4611L25.769 24.9088C26.4156 24.1237 26.9303 23.2388 27.2928 22.2886L26.3907 21.6239C25.9788 21.3216 25.6437 20.9265 25.4128 20.4707C25.1818 20.0148 25.0614 19.511 25.0613 19C25.0612 18.489 25.1814 17.9852 25.4122 17.5292C25.6429 17.0733 25.9778 16.6781 26.3896 16.3756L27.2905 15.712C26.928 14.7622 26.4134 13.8776 25.7668 13.093L24.7528 13.5372C24.2846 13.7422 23.7747 13.8342 23.2643 13.8058C22.7539 13.7774 22.2574 13.6294 21.8148 13.3737C21.3721 13.118 20.9958 12.7618 20.7163 12.3338C20.4367 11.9059 20.2617 11.4182 20.2053 10.9102L20.0821 9.80695C19.5834 9.72543 19.0783 9.68123 18.5731 9.67469ZM18.5595 14.7614C19.6837 14.7614 20.7619 15.208 21.5569 16.0029C22.3518 16.7979 22.7984 17.8761 22.7984 19.0003C22.7984 20.1245 22.3518 21.2027 21.5569 21.9977C20.7619 22.7926 19.6837 23.2392 18.5595 23.2392C17.4353 23.2392 16.3571 22.7926 15.5621 21.9977C14.7672 21.2027 14.3206 20.1245 14.3206 19.0003C14.3206 17.8761 14.7672 16.7979 15.5621 16.0029C16.3571 15.208 17.4353 14.7614 18.5595 14.7614ZM18.5595 16.457C17.8849 16.457 17.238 16.7249 16.7611 17.2019C16.2841 17.6789 16.0161 18.3258 16.0161 19.0003C16.0161 19.6748 16.2841 20.3217 16.7611 20.7987C17.238 21.2757 17.8849 21.5436 18.5595 21.5436C19.234 21.5436 19.8809 21.2757 20.3579 20.7987C20.8349 20.3217 21.1028 19.6748 21.1028 19.0003C21.1028 18.3258 20.8349 17.6789 20.3579 17.2019C19.8809 16.7249 19.234 16.457 18.5595 16.457Z"
        fill="#555555"
      />
    </svg>
  );
};

const Dashboard = () => {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7646 7.48004H10.6799C10.2916 7.48004 9.95762 7.48004 9.66262 7.54955C9.20594 7.65868 8.78838 7.89211 8.45621 8.22397C8.12405 8.55584 7.89024 8.97318 7.78071 9.42977C7.71289 9.72477 7.71289 10.0571 7.71289 10.447V14.6855C7.71289 15.0738 7.71289 15.4078 7.7824 15.7028C7.89153 16.1595 8.12496 16.577 8.45682 16.9092C8.78869 17.2414 9.20604 17.4752 9.66262 17.5847C9.95762 17.6525 10.2899 17.6525 10.6799 17.6525H14.9184C15.3067 17.6525 15.6407 17.6525 15.9357 17.583C16.3924 17.4739 16.8099 17.2405 17.1421 16.9086C17.4742 16.5767 17.708 16.1594 17.8176 15.7028C17.8854 15.4078 17.8854 15.0755 17.8854 14.6855V10.447C17.8854 10.0588 17.8854 9.72477 17.8159 9.42977C17.7068 8.97308 17.4733 8.55553 17.1415 8.22336C16.8096 7.8912 16.3923 7.65739 15.9357 7.54786C15.6407 7.48004 15.3084 7.48004 14.9184 7.48004H10.7646ZM10.0577 9.19919C10.1306 9.18224 10.2441 9.17545 10.7646 9.17545H14.8336C15.3558 9.17545 15.4677 9.18054 15.5406 9.19919C15.6929 9.23561 15.8322 9.3135 15.9429 9.42423C16.0536 9.53496 16.1315 9.67419 16.1679 9.82649C16.1849 9.8977 16.19 10.0096 16.19 10.5318V14.6008C16.19 15.123 16.1849 15.2349 16.1662 15.3078C16.1298 15.4601 16.0519 15.5993 15.9412 15.71C15.8305 15.8208 15.6912 15.8986 15.5389 15.9351C15.4694 15.9503 15.3575 15.9571 14.8336 15.9571H10.7646C10.2425 15.9571 10.1306 15.952 10.0577 15.9334C9.90535 15.897 9.76612 15.8191 9.65539 15.7083C9.54466 15.5976 9.46677 15.4584 9.43035 15.3061C9.41509 15.2366 9.40831 15.1247 9.40831 14.6008V10.5318C9.40831 10.0096 9.41339 9.8977 9.43204 9.8248C9.46846 9.6725 9.54636 9.53326 9.65709 9.42254C9.76781 9.31181 9.90705 9.23392 10.0593 9.19749L10.0577 9.19919ZM22.6326 7.48004H22.5478C22.1595 7.48004 21.8255 7.48004 21.5305 7.54955C21.0739 7.65868 20.6563 7.89211 20.3241 8.22397C19.992 8.55584 19.7582 8.97318 19.6486 9.42977C19.5808 9.72477 19.5808 10.0571 19.5808 10.447V14.6855C19.5808 15.0738 19.5808 15.4078 19.6503 15.7028C19.7595 16.1595 19.9929 16.577 20.3247 16.9092C20.6566 17.2414 21.074 17.4752 21.5305 17.5847C21.8255 17.6525 22.1578 17.6525 22.5478 17.6525H26.7863C27.1746 17.6525 27.5086 17.6525 27.8036 17.583C28.2603 17.4739 28.6778 17.2405 29.01 16.9086C29.3422 16.5767 29.576 16.1594 29.6855 15.7028C29.7533 15.4078 29.7533 15.0755 29.7533 14.6855V10.447C29.7533 10.0588 29.7533 9.72477 29.6838 9.42977C29.5747 8.97308 29.3413 8.55553 29.0094 8.22336C28.6775 7.8912 28.2602 7.65739 27.8036 7.54786C27.5086 7.48004 27.1763 7.48004 26.7863 7.48004H22.6326ZM21.9256 9.19919C21.9985 9.18224 22.1121 9.17545 22.6326 9.17545H26.7016C27.2238 9.17545 27.3357 9.18054 27.4086 9.19919C27.5609 9.23561 27.7001 9.3135 27.8108 9.42423C27.9215 9.53496 27.9994 9.67419 28.0359 9.82649C28.0528 9.8977 28.0579 10.0096 28.0579 10.5318V14.6008C28.0579 15.123 28.0511 15.2349 28.0342 15.3078C27.9977 15.4601 27.9199 15.5993 27.8091 15.71C27.6984 15.8208 27.5592 15.8986 27.4069 15.9351C27.3357 15.952 27.2238 15.9571 26.7016 15.9571H22.6326C22.1104 15.9571 21.9985 15.952 21.9256 15.9334C21.7733 15.897 21.634 15.8191 21.5233 15.7083C21.4126 15.5976 21.3347 15.4584 21.2983 15.3061C21.283 15.2366 21.2762 15.1247 21.2762 14.6008V10.5318C21.2762 10.0096 21.2813 9.8977 21.3 9.8248C21.3364 9.6725 21.4143 9.53326 21.525 9.42254C21.6357 9.31181 21.775 9.23392 21.9273 9.19749L21.9256 9.19919ZM10.6799 19.3479H14.9184C15.3067 19.3479 15.6407 19.3479 15.9357 19.4174C16.3924 19.5266 16.8099 19.76 17.1421 20.0919C17.4742 20.4237 17.708 20.8411 17.8176 21.2977C17.8854 21.5927 17.8854 21.925 17.8854 22.3149V26.5534C17.8854 26.9417 17.8854 27.2757 17.8159 27.5707C17.7068 28.0274 17.4733 28.4449 17.1415 28.7771C16.8096 29.1093 16.3923 29.3431 15.9357 29.4526C15.6407 29.5204 15.3084 29.5204 14.9184 29.5204H10.6799C10.2916 29.5204 9.95762 29.5204 9.66262 29.4509C9.20594 29.3418 8.78838 29.1083 8.45621 28.7765C8.12405 28.4446 7.89024 28.0273 7.78071 27.5707C7.71289 27.2757 7.71289 26.9434 7.71289 26.5534V22.3149C7.71289 21.9267 7.71289 21.5927 7.7824 21.2977C7.89153 20.841 8.12496 20.4234 8.45682 20.0913C8.78869 19.7591 9.20604 19.5253 9.66262 19.4157C9.95762 19.3479 10.2899 19.3479 10.6799 19.3479ZM10.7646 21.0433C10.2425 21.0433 10.1306 21.0484 10.0577 21.0671C9.90535 21.1035 9.76612 21.1814 9.65539 21.2921C9.54466 21.4029 9.46677 21.5421 9.43035 21.6944C9.41509 21.7639 9.40831 21.8758 9.40831 22.3997V26.4687C9.40831 26.9909 9.41339 27.1028 9.43204 27.1757C9.46846 27.328 9.54636 27.4672 9.65709 27.5779C9.76781 27.6886 9.90705 27.7665 10.0593 27.803C10.1306 27.8199 10.2425 27.825 10.7646 27.825H14.8336C15.3558 27.825 15.4677 27.8182 15.5406 27.8013C15.6929 27.7648 15.8322 27.687 15.9429 27.5762C16.0536 27.4655 16.1315 27.3263 16.1679 27.174C16.1849 27.1028 16.19 26.9909 16.19 26.4687V22.3997C16.19 21.8775 16.1849 21.7656 16.1662 21.6927C16.1298 21.5404 16.0519 21.4012 15.9412 21.2904C15.8305 21.1797 15.6912 21.1018 15.5389 21.0654C15.4694 21.0501 15.3575 21.0433 14.8336 21.0433H10.7646ZM22.6326 19.3479H22.5478C22.1595 19.3479 21.8255 19.3479 21.5305 19.4174C21.0739 19.5266 20.6563 19.76 20.3241 20.0919C19.992 20.4237 19.7582 20.8411 19.6486 21.2977C19.5808 21.5927 19.5808 21.925 19.5808 22.3149V26.5534C19.5808 26.9417 19.5808 27.2757 19.6503 27.5707C19.7595 28.0274 19.9929 28.4449 20.3247 28.7771C20.6566 29.1093 21.074 29.3431 21.5305 29.4526C21.8255 29.5221 22.1595 29.5221 22.5478 29.5221H26.7863C27.1746 29.5221 27.5086 29.5221 27.8036 29.4526C28.26 29.3432 28.6772 29.1096 29.009 28.7778C29.3409 28.446 29.5744 28.0288 29.6838 27.5724C29.7533 27.2774 29.7533 26.9434 29.7533 26.5551V22.3149C29.7533 21.9267 29.7533 21.5927 29.6838 21.2977C29.5747 20.841 29.3413 20.4234 29.0094 20.0913C28.6775 19.7591 28.2602 19.5253 27.8036 19.4157C27.5086 19.3479 27.1763 19.3479 26.7863 19.3479H22.6326ZM21.9256 21.0671C21.9985 21.0501 22.1121 21.0433 22.6326 21.0433H26.7016C27.2238 21.0433 27.3357 21.0484 27.4086 21.0671C27.5609 21.1035 27.7001 21.1814 27.8108 21.2921C27.9215 21.4029 27.9994 21.5421 28.0359 21.6944C28.0528 21.7656 28.0579 21.8775 28.0579 22.3997V26.4687C28.0579 26.9909 28.0511 27.1028 28.0342 27.1757C27.9977 27.328 27.9199 27.4672 27.8091 27.5779C27.6984 27.6886 27.5592 27.7665 27.4069 27.803C27.3357 27.8199 27.2238 27.825 26.7016 27.825H22.6326C22.1104 27.825 21.9985 27.8182 21.9256 27.8013C21.7733 27.7648 21.634 27.687 21.5233 27.5762C21.4126 27.4655 21.3347 27.3263 21.2983 27.174C21.283 27.1044 21.2762 26.9925 21.2762 26.4687V22.3997C21.2762 21.8775 21.2813 21.7656 21.3 21.6927C21.3364 21.5404 21.4143 21.4012 21.525 21.2904C21.6357 21.1797 21.775 21.1018 21.9273 21.0654L21.9256 21.0671Z"
        fill="#2B6C57"
      />
    </svg>
  );
};

const ProfileSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.25 6.75C17.25 8.14239 16.6969 9.47774 15.7123 10.4623C14.7277 11.4469 13.3924 12 12 12C10.6076 12 9.27226 11.4469 8.28769 10.4623C7.30312 9.47774 6.75 8.14239 6.75 6.75C6.75 5.35761 7.30312 4.02226 8.28769 3.03769C9.27226 2.05312 10.6076 1.5 12 1.5C13.3924 1.5 14.7277 2.05312 15.7123 3.03769C16.6969 4.02226 17.25 5.35761 17.25 6.75ZM15.75 6.75C15.75 5.75544 15.3549 4.80161 14.6517 4.09835C13.9484 3.39509 12.9946 3 12 3C11.0054 3 10.0516 3.39509 9.34835 4.09835C8.64509 4.80161 8.25 5.75544 8.25 6.75C8.25 7.74456 8.64509 8.69839 9.34835 9.40165C10.0516 10.1049 11.0054 10.5 12 10.5C12.9946 10.5 13.9484 10.1049 14.6517 9.40165C15.3549 8.69839 15.75 7.74456 15.75 6.75ZM5.625 13.5C4.92881 13.5 4.26113 13.7766 3.76884 14.2688C3.27656 14.7611 3 15.4288 3 16.125V16.5C3 18.2948 4.14225 19.8127 5.76375 20.8447C7.39425 21.8827 9.6015 22.5 12 22.5C14.3985 22.5 16.605 21.8827 18.2362 20.8447C19.8577 19.8127 21 18.2948 21 16.5V16.125C21 15.4288 20.7234 14.7611 20.2312 14.2688C19.7389 13.7766 19.0712 13.5 18.375 13.5H5.625ZM4.5 16.125C4.5 15.8266 4.61853 15.5405 4.8295 15.3295C5.04048 15.1185 5.32663 15 5.625 15H18.375C18.6734 15 18.9595 15.1185 19.1705 15.3295C19.3815 15.5405 19.5 15.8266 19.5 16.125V16.5C19.5 17.6047 18.795 18.7118 17.4307 19.5795C16.0755 20.442 14.1578 21 12 21C9.84225 21 7.9245 20.442 6.56925 19.5795C5.20425 18.7125 4.5 17.604 4.5 16.5V16.125Z"
        fill="#555555"
      />
    </svg>
  );
};

const LogoutSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5494 3 19V5.00003C3 4.45003 3.196 3.97903 3.588 3.58703C3.98 3.19503 4.45067 2.99937 5 3.00003H12V5.00003H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45003L16 7.00003L21 12L16 17Z"
        fill="#D52B2B"
      />
    </svg>
  );
};

export default function TabBar() {
  const { user } = useAppSelector((state) => state.auth);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[82px] bg-white shadow-lg">
      <div className="w-full h-[82px] flex items-center justify-between px-10">
        <div className="cursor-pointer">
          <Dashboard />
        </div>
        <div className="cursor-pointer">
          <Menus />
        </div>
        <div className="cursor-pointer">
          <Settings />
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => setProfileMenuVisible((prev) => !prev)}
        >
          {profileMenuVisible && (
            <div className="absolute -right-4 -top-[190px] flex flex-col justify-evenly h-[162px] w-[214px] rounded-md shadow-lg px-4 z-20 bg-white">
              <div className="flex items-center gap-3">
                <ProfileSvg />
                <p className="font-nunito text-[16px] text-[#555]">View Profile</p>
              </div>
              <div className="flex items-center gap-3">
                <LogoutSvg />
                <p className="font-nunito text-[16px] text-red-600">Log Out</p>
              </div>
            </div>
          )}
          <img
            src={user!.logo?.secure_url}
            alt="profile image"
            className="w-[30px] h-[30px] rounded-full object-contain border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
