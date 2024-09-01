import { Facebook } from "lucide-react";
import NavNoHero from "../components/navNoHero";

export default function About() {
  return (
    <div>
      <NavNoHero />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://picerija-spajza.si/wp-content/uploads/2013/09/picerija-spajza-300x200.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">O Špajzi</h1>
            <p className="py-6">
              Picerija Špajza se nahaja na Bregu pri Majšperku, le nekaj metrov
              od glavne ceste Ptuj – Rogatec. Naša zgodba se je začela pisati
              spomladi 2005. Od takrat do danes smo kar precej zrastli. Sproti
              smo širili našo ponudbo jedi in hkrati povečali naše kapacitete.
              Gostom želimo poleg dobre hrane ponuditi tudi prijeten, umirjen
              ambient. Danes lahko v treh ločenih prostorih sprejmemo 140
              gostov, v poletnih mesecih pa naši gostje radi izberejo tudi
              veliko zunanjo teraso. Kot se za picerijo spodobi lahko izbirate
              med 20 vrstami pic iz krušne peči. Daleč naokoli smo poznani po
              odličnih lignjih, ki jih pripravimo na različne načine. Špajzine
              XXL akcije lignjev že dolgo privabljajo najbolj lačne ljubitelje
              te morske hrane. Ljubitelji mesnih jedi radi izbirajo med »Šnicl
              meniji«, vse bolj priljubljeni pa so tudi veliki solatni krožniki
              z mesnimi dodatki ali brez. Po želji gostov pa vam pripravimo tudi
              kosila. Za večje skupine je ob vikendih priporočljiva telefonska
              rezervacija. Se vidimo v Špajzi! Spremljajte nas nas tudi na
              družbenem omrežju facebook in delite z nami vaše vtise iz Špajze.
            </p>
            <button className="btn btn-primary">
              <a target="blank" href="https://www.facebook.com/picerijaspajza">
                <Facebook />
              </a>
            </button>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}
