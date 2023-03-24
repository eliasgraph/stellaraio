import React from "react";
import { Modal, ModalBody } from "reactstrap";
import amazon from "../../../assets/imgs/logos/amazon.png";
import amd from "../../../assets/imgs/logos/amd.png";
import topps from "../../../assets/imgs/logos/topps.png";
import bestbuy from "../../../assets/imgs/logos/bestbuy.png";
import BH_logo from "../../../assets/imgs/logos/BH_logo.png";
import costco from "../../../assets/imgs/logos/costco.png";
import dicks from "../../../assets/imgs/logos/dicks.png";
import disney from "../../../assets/imgs/logos/disney.png";
import evga from "../../../assets/imgs/logos/evga.png";
import fanatics from "../../../assets/imgs/logos/fanatics.png";
import footlocker from "../../../assets/imgs/logos/foot-locker.png";
import gamestop from "../../../assets/imgs/logos/gamestop.png";
import newegg from "../../../assets/imgs/logos/newegg.png";
import nordstorm from "../../../assets/imgs/logos/nordstrom.png";
import officedepot from "../../../assets/imgs/logos/officedepot.png";
import panini from "../../../assets/imgs/logos/panini.png";
import queue from "../../../assets/imgs/logos/queue.png";
import sams from "../../../assets/imgs/logos/sams.png";
import sense from "../../../assets/imgs/logos/sense.png";
import shopify from "../../../assets/imgs/logos/shopify.png";
import snipeslogo from "../../../assets/imgs/logos/snipes-logo 3.png";
import Union from "../../../assets/imgs/logos/Union.png";
import walmart from "../../../assets/imgs/logos/walmart.png";
import target from "../../../assets/imgs/logos/target_logo.png";
import swatch from "../../../assets/imgs/logos/Swatch.png";
import close from "../../../assets/imgs/icon/close.png";

function SeeSiteModal({ seeSite, tog_seeSite }) {
  return (
    <Modal isOpen={seeSite} toggle={tog_seeSite} centered className="modal-md">
      <ModalBody>
        <div className="see-site">
          <div role={"button"} onClick={tog_seeSite} className="close-icon">
            <img src={close} alt="close" />
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={amazon} alt="amazon" />
              </div>
              <p className="see-site__text mb-0">Amazon</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={topps} alt="topps" />
              </div>
              <p className="see-site__text mb-0">Topps</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={bestbuy} alt="bestbuy" />
              </div>
              <p className="see-site__text mb-0">Best Buy</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={disney} alt="disney" />
              </div>
              <p className="see-site__text mb-0">Disney</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={walmart} alt="walmart" />
              </div>
              <p className="see-site__text mb-0">Walmart</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={sense} alt="sense" />
              </div>
              <p className="see-site__text mb-0">Ssense</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={Union} alt="yeeze" />
              </div>
              <p className="see-site__text mb-0">Yeeze</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={dicks} alt="dicks" />
              </div>
              <p className="see-site__text mb-0">Dicks</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={target} alt="target" />
              </div>
              <p className="see-site__text mb-0">Target</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={snipeslogo} alt="snipes" />
              </div>
              <p className="see-site__text mb-0">Snipes</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={shopify} alt="shopify" />
              </div>
              <p className="see-site__text mb-0">Shopify</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={swatch} alt="swatch" />
              </div>
              <p className="see-site__text mb-0">Swatch</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={queue} alt="queue" />
              </div>
              <p className="see-site__text mb-0">Queue It</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={nordstorm} alt="nordstorm" />
              </div>
              <p className="see-site__text mb-0">Nordstrom</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={walmart} alt="walmart" />
              </div>
              <p className="see-site__text mb-0">Walmart CA</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={costco} alt="costco" />
              </div>
              <p className="see-site__text mb-0">Costco</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={gamestop} alt="gamestop" />
              </div>
              <p className="see-site__text mb-0">Game Stop</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={sams} alt="sams" />
              </div>
              <p className="see-site__text mb-0">Sams Club</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={newegg} alt="newegg" />
              </div>
              <p className="see-site__text mb-0">NewEgg</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={evga} alt="evga" />
              </div>
              <p className="see-site__text mb-0">Evga</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={fanatics} alt="fanatics" />
              </div>
              <p className="see-site__text mb-0">Fanatics</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={BH_logo} alt="bh" />
              </div>
              <p className="see-site__text mb-0">B&H</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={panini} alt="panini" />
              </div>
              <p className="see-site__text mb-0">Panini</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={footlocker} alt="footlocker" />
              </div>
              <p className="see-site__text mb-0">Footlocker</p>
            </div>
          </div>
          <div className="see-site__item d-flex justify-content-between align-items-center">
            <div className="see-site__left d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={amd} alt="amd" />
              </div>
              <p className="see-site__text mb-0">AMD</p>
            </div>
            <div className="see-site__right d-flex align-items-center">
              <div className="see-site__icon me-3">
                <img width={"100%"} src={officedepot} alt="officedepot" />
              </div>
              <p className="see-site__text mb-0">Office Depot</p>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default SeeSiteModal;
