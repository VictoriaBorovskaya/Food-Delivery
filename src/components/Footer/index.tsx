import { dishes, information } from 'helpers';
import Button from './Button';
import { EmailSVG } from './SVG';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-neutral-100/70">
      <div className="max-w-7xl m-auto px-5 flex flex-col py-16">
        <p className="text-xl font-semibold text-center sm:text-start">В приложении еще удобнее</p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-5 pt-5">
          <Button link="https://avatars.mds.yandex.net/get-bunker/50064/763f8b02d2dcb86dc0a7f5c00609ce68261cd418/svg" />
          <Button link="https://avatars.mds.yandex.net/get-bunker/60661/56991f6060ab2c47ea80ddb75ab1a1358e0e58fc/svg" />
          <Button link="https://avatars.mds.yandex.net/get-bunker/998550/6570800137052ee111fb467b574f136878769ec3/orig" />
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl m-auto px-5 flex justify-between py-10 gap-5">
          <ul className="hidden sm:flex flex-col gap-2 w-full">
            <li className="footer-title">Блюда и кухни</li>
            {dishes.map((dish) => {
              return <li className="footer-text">{dish}</li>;
            })}
          </ul>
          <ul className="flex flex-col text-start gap-2 w-full sm:text-end">
            <li className="footer-title">О компании</li>
            {information.map((info) => {
              return <li className="footer-text">{info}</li>;
            })}
            <div className="flex text-end items-center gap-1 self-end pt-10 text-neutral-500 cursor-pointer hover:text-neutral-600">
              <EmailSVG />
              <p className="text-sm">Обратная связь</p>
            </div>
          </ul>
        </div>
        <div className="border-t border-neutral-200">
          <p className="max-w-7xl m-auto p-5 text-neutral-500 text-sm">© 2018–2023 ООО «Food.Delivery»</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
