import Layout from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import Container from "@/components/ui/Container";

const TermeniConditii = () => {
  const currentDate = new Date().toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Layout>
      <div className="bg-background py-12 md:py-20">
        <Container className="max-w-screen-lg">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h1 className="font-luxury text-4xl md:text-5xl font-bold text-foreground">
                Termeni și Condiții
              </h1>
              <p className="mt-4 text-muted-foreground">
                Ultima actualizare: {currentDate}
              </p>
            </div>

            <div className="prose prose-invert max-w-none mx-auto text-muted-foreground prose-h2:text-foreground prose-h2:font-luxury prose-h3:text-foreground prose-h3:font-luxury prose-strong:text-foreground prose-a:text-luxury-gold hover:prose-a:text-luxury-gold-hover">
              
              <h2>1. Introducere și Datele Companiei</h2>
              <p>
                Prezentul document stabilește termenii și condițiile de utilizare a website-ului <strong>www.awdauto.ro</strong> (denumit în continuare "Site-ul"), operat de <strong>AWD Auto Trade SRL</strong>, o societate comercială de naționalitate română, cu sediul social în Cluj-Napoca, Str. Beclean Nr. 3, Ap. 1, înregistrată la Registrul Comerțului sub nr. J12/306/2022, cod unic de înregistrare (CUI) RO45508352, denumită în continuare "Vânzător" sau "Compania".
              </p>
              
              <h2>2. Definiții</h2>
              <ul>
                <li><strong>Vânzător:</strong> AWD Auto Trade SRL, proprietarul și operatorul Site-ului.</li>
                <li><strong>Utilizator/Cumpărător:</strong> Orice persoană fizică sau juridică ce accesează, navighează sau utilizează Site-ul, sau care intenționează să achiziționeze un vehicul de la Vânzător.</li>
                <li><strong>Site:</strong> Domeniul www.awdauto.ro și toate subdomeniile acestuia.</li>
                <li><strong>Vehicul:</strong> Orice autoturism rulat (second-hand) comercializat de către Vânzător prin intermediul Site-ului sau la punctul de lucru.</li>
              </ul>

              <h2>3. Acceptarea Termenilor</h2>
              <p>
                Utilizarea, vizitarea și accesarea acestui Site implică acceptarea totală și necondiționată a acestor Termeni și Condiții. Continuarea navigării pe Site reprezintă acordul dumneavoastră implicit cu prevederile prezentului document. Dacă nu sunteți de acord cu acești termeni, vă rugăm să încetați imediat utilizarea Site-ului.
              </p>

              <h2>4. Descrierea Produselor și Serviciilor</h2>
              <p>
                Toate vehiculele comercializate de AWD Auto sunt vehicule rulate (second-hand) și sunt vândute în starea în care se află la momentul tranzacției ("as is"), cu inspecțiile și verificările efectuate de personalul nostru specializat.
              </p>
              <p>
                Informațiile prezentate pe Site (fotografii, specificații tehnice, dotări, preț) au caracter informativ și sunt publicate cu intenția de a reflecta cât mai fidel realitatea. Cu toate acestea, pot exista erori umane de operare. Vânzătorul nu își asumă răspunderea pentru eventualele discrepanțe neintenționate. Validarea finală a tuturor informațiilor se realizează la sediul parcului auto, în prezența unui reprezentant al Vânzătorului și a Cumpărătorului.
              </p>

              <h2>5. Prețuri și Modalități de Plată</h2>
              <p>
                Prețurile vehiculelor sunt afișate în EURO (€) și includ Taxa pe Valoarea Adăugată (TVA), dacă nu se specifică altfel (ex: TVA deductibil). Prețul final, modalitățile de plată și toate condițiile comerciale se stabilesc prin contractul de vânzare-cumpărare încheiat între Vânzător și Cumpărător. Ofertele și promoțiile sunt valabile în limita stocului disponibil și a perioadelor specificate.
              </p>

              <h2>6. Politica de Garanție</h2>
              <p>
                Pentru a asigura liniștea și siguranța clienților noștri, vehiculele comercializate de AWD Auto pot beneficia de o garanție extinsă, oferită ca serviciu externalizat prin parteneriatul cu <strong>DEFEND Insurance Group</strong>. Această garanție este opțională și/sau inclusă în preț în funcție de ofertă, fiind supusă termenilor, condițiilor și limitelor de acoperire stabilite exclusiv de partenerul nostru. Durata garanției poate ajunge până la 36 de luni, conform pachetului ales. Detaliile complete privind acoperirea și procedurile de despăgubire sunt disponibile în documentația de garanție oferită de DEFEND Insurance.
              </p>

              <h2>7. Politica de Finanțare</h2>
              <p>
                AWD Auto acționează ca un facilitator în procesul de obținere a finanțării (credit auto sau leasing). Soluțiile de finanțare sunt oferite prin intermediari și parteneri financiari autorizați (ex: TBI Bank, Unicredit Bank, Mogo, etc.). Aprobarea creditului, condițiile de finanțare (avans, dobândă, perioadă) și termenii contractuali sunt stabilite exclusiv de către instituția financiară parteneră. AWD Auto nu este parte în contractul de creditare și nu poate fi tras la răspundere pentru deciziile sau condițiile impuse de finanțator.
              </p>

              <h2>8. Drepturile și Obligațiile Utilizatorului/Cumpărătorului</h2>
              <ul>
                <li>Utilizatorul se obligă să folosească Site-ul în conformitate cu legile în vigoare și să nu desfășoare activități ilegale sau care ar putea prejudicia funcționarea acestuia.</li>
                <li>Cumpărătorul are dreptul și obligația de a inspecta personal și detaliat vehiculul la sediul Vânzătorului înainte de încheierea contractului de vânzare-cumpărare. Efectuarea unui test drive este încurajată.</li>
                <li>Cumpărătorul este responsabil pentru verificarea tuturor documentelor vehiculului înainte de semnare.</li>
              </ul>

              <h2>9. Limitarea Răspunderii</h2>
              <p>
                Vânzătorul nu va fi responsabil pentru eventuale daune directe sau indirecte (incluzând, dar fără a se limita la, pierderi de profit, oportunități de afaceri sau alte pierderi pecuniare) suferite de Utilizator ca urmare a utilizării Site-ului sau a informațiilor prezentate. Răspunderea maximă a Vânzătorului față de orice Cumpărător, în orice circumstanță, este limitată la valoarea totală a vehiculului, așa cum este stipulată în contractul de vânzare-cumpărare.
              </p>

              <h2>10. Drepturi de Proprietate Intelectuală</h2>
              <p>
                Întregul conținut al Site-ului – texte, imagini, grafice, logo-uri, elemente de design și cod sursă – reprezintă proprietatea intelectuală a <strong>AWD Auto Trade SRL</strong> și este protejat de legislația română și internațională privind drepturile de autor și drepturile conexe. Orice utilizare neautorizată a acestui conținut constituie o încălcare a legii și va fi sancționată ca atare.
              </p>

              <h2>11. Soluționarea Litigiilor și Legea Aplicabilă</h2>
              <p>
                Orice neînțelegere sau litigiu care ar putea apărea între Vânzător și Utilizator/Cumpărător va fi soluționată pe cale amiabilă. În cazul în care soluționarea amiabilă nu este posibilă, litigiul va fi înaintat spre soluționare instanțelor judecătorești competente din Cluj-Napoca.
              </p>
              <p>
                De asemenea, Cumpărătorii au posibilitatea de a apela la procedura de Soluționare Alternativă a Litigiilor (SAL), conform legii. Mai multe detalii pot fi găsite pe site-ul Autorității Naționale pentru Protecția Consumatorilor (ANPC), accesând <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">acest link</a>.
              </p>
              <p>
                Legea aplicabilă este legislația în vigoare din România.
              </p>

              <h2>12. Dispoziții Finale</h2>
              <p>
                Vânzătorul își rezervă dreptul de a modifica sau actualiza oricând conținutul acestor Termeni și Condiții, fără o notificare prealabilă. Versiunea actualizată va fi publicată pe Site și va intra în vigoare imediat. Este responsabilitatea Utilizatorului de a verifica periodic această pagină.
              </p>

            </div>
          </AnimatedSection>
        </Container>
      </div>
    </Layout>
  );
};

export default TermeniConditii;
