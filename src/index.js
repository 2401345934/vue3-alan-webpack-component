import DigitalScroll from './DigitalScroll'

//按需引入
export {  DigitalScroll};

const components = [DigitalScroll, ];

const install = (App) => {
  components.forEach((item) => {
    App.component(item.alanComponentName, item);
  });
};

export default { install };
