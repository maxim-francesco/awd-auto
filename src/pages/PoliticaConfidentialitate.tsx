import Layout from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import Container from "@/components/ui/Container";

const PoliticaConfidentialitate = () => {
  const currentYear = new Date().getFullYear();
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
                Politică de Confidențialitate
              </h1>
              <p className="mt-4 text-muted-foreground">
                Ultima actualizare: {currentDate}
              </p>
            </div>

            <div className="prose prose-invert max-w-none mx-auto text-muted-foreground prose-h2:text-foreground prose-h2:font-luxury prose-h3:text-foreground prose-h3:font-luxury prose-strong:text-foreground prose-a:text-luxury-gold hover:prose-a:text-luxury-gold-hover">
              
              <h2>1. Introducere și Operatorul de Date</h2>
              <p>
                Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă una dintre preocupările principale ale <strong>SC AWD AUTO SRL</strong>, în calitate de operator de date. Acest document are rolul de a vă informa cu privire la prelucrarea datelor dumneavoastră cu caracter personal, în contextul utilizării paginii de internet <strong>www.awdauto.ro</strong>.
              </p>
              <p>
                Operatorul de date este <strong>SC AWD AUTO SRL</strong>, persoană juridică de naționalitate română, având sediul social în Cluj-Napoca, România, înregistrată la Registrul Comerțului sub nr. J12/1234/2025, cod unic de înregistrare fiscală RO12345678 (în continuare "AWD Auto" sau "Operatorul").
              </p>

              <h2>2. Categoriile de Date cu Caracter Personal Prelucrate</h2>
              <p>
                Colectăm următoarele categorii de date cu caracter personal:
              </p>
              <ul>
                <li><strong>Date furnizate voluntar:</strong> Nume, prenume, număr de telefon, adresă de e-mail, și orice alte informații pe care le furnizați prin intermediul formularelor de contact, formularului de cerere de ofertă, sau a formularului pentru mașini la comandă.</li>
                <li><strong>Date colectate automat:</strong> Atunci când vizitați site-ul nostru, serverul colectează automat anumite informații precum adresa IP, tipul browser-ului, sistemul de operare, paginile vizitate și ora accesării. Aceste date sunt colectate prin intermediul fișierelor de tip cookies și tehnologii similare.</li>
              </ul>

              <h2>3. Scopurile și Temeiurile Legale ale Prelucrării</h2>
              <p>
                Datele dumneavoastră sunt prelucrate în următoarele scopuri și temeiuri legale, conform Art. 6 din Regulamentul (UE) 2016/679 (GDPR):
              </p>
              <ul>
                <li><strong>Pentru a răspunde solicitărilor dumneavoastră</strong> (prin formularele de pe site): Prelucrăm datele (nume, e-mail, telefon) pentru a comunica cu dumneavoastră și a oferi informațiile cerute. Temeiul legal este interesul nostru legitim de a răspunde solicitărilor (Art. 6, alin. 1, lit. f) sau demersuri pre-contractuale la cererea dumneavoastră (Art. 6, alin. 1, lit. b).</li>
                <li><strong>Pentru procesarea cererilor de finanțare:</strong> La solicitarea dumneavoastră, putem transmite datele necesare partenerilor noștri financiari. Temeiul legal este executarea unui contract sau demersuri în vederea încheierii acestuia (Art. 6, alin. 1, lit. b).</li>
                <li><strong>Pentru scopuri de marketing (ex: newsletter):</strong> Doar dacă v-ați exprimat consimțământul explicit, vă putem trimite comunicări comerciale. Temeiul legal este consimțământul dumneavoastră (Art. 6, alin. 1, lit. a). Puteți retrage acest consimțământ oricând.</li>
                <li><strong>Pentru îmbunătățirea serviciilor noastre și analiza traficului:</strong> Folosim date colectate automat pentru a înțelege cum este utilizat site-ul și pentru a-i îmbunătăți funcționalitatea. Temeiul legal este interesul nostru legitim de a asigura funcționarea optimă a site-ului (Art. 6, alin. 1, lit. f).</li>
              </ul>
              
              <h2>4. Perioada de Stocare a Datelor</h2>
              <p>
                Datele dumneavoastră vor fi stocate pe o perioadă limitată, în funcție de scopul prelucrării:
              </p>
              <ul>
                <li>Datele din contractele de vânzare-cumpărare și documentele fiscale vor fi stocate conform legislației în vigoare (de regulă, 10 ani).</li>
                <li>Datele colectate pentru a răspunde solicitărilor vor fi păstrate pe o perioadă rezonabilă necesară pentru finalizarea comunicării.</li>
                <li>Datele pentru marketing vor fi stocate până la retragerea consimțământului dumneavoastră.</li>
              </ul>

              <h2>5. Destinatarii Datelor cu Caracter Personal</h2>
              <p>
                Pentru îndeplinirea scopurilor de prelucrare, AWD Auto poate dezvălui datele dumneavoastră către următoarele categorii de destinatari:
              </p>
              <ul>
                <li><strong>Parteneri financiari</strong> (ex: Unicredit, TBI Bank, BT Direct, Mogo), la cererea dumneavoastră explicită pentru o ofertă de finanțare.</li>
                <li><strong>Partenerul de garanție</strong> (DEFEND Insurance), în vederea emiterii poliței de garanție.</li>
                <li><strong>Furnizori de servicii IT</strong> (ex: servicii de hosting, mentenanță web, analiză de trafic).</li>
                <li><strong>Autorități publice</strong> (instanțe judecătorești, poliție, etc.), în cazul unei solicitări legale.</li>
              </ul>
              <p>
                Transferul datelor se realizează în condiții de siguranță și confidențialitate, asigurându-ne că partenerii noștri respectă la rândul lor prevederile GDPR.
              </p>

              <h2>6. Drepturile Dumneavoastră Conform GDPR</h2>
              <p>
                În calitate de persoană vizată, beneficiați de următoarele drepturi:
              </p>
              <ul>
                <li><strong>Dreptul la informare și acces:</strong> Dreptul de a obține o confirmare că prelucrăm sau nu datele dumneavoastră și acces la acestea.</li>
                <li><strong>Dreptul la rectificare:</strong> Dreptul de a obține corectarea datelor inexacte.</li>
                <li><strong>Dreptul la ștergere („dreptul de a fi uitat”):</strong> Puteți solicita ștergerea datelor în anumite condiții prevăzute de lege.</li>
                <li><strong>Dreptul la restricționarea prelucrării:</strong> Puteți solicita limitarea modului în care prelucrăm datele.</li>
                <li><strong>Dreptul la portabilitatea datelor:</strong> Dreptul de a primi datele într-un format structurat, utilizat în mod curent și care poate fi citit automat.</li>
                <li><strong>Dreptul la opoziție:</strong> Dreptul de a vă opune prelucrării datelor în scop de marketing direct sau atunci când prelucrarea se bazează pe interesul nostru legitim.</li>
                <li><strong>Dreptul de a depune o plângere:</strong> Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</li>
              </ul>
              <p>
                Pentru exercitarea acestor drepturi, ne puteți contacta printr-o cerere scrisă, datată și semnată, trimisă la adresa de e-mail: <strong>protectiadatelor@awdauto.ro</strong>.
              </p>

              <h2>7. Politica de Cookies</h2>
              <p>
                Site-ul nostru utilizează fișiere de tip "cookie". Cookies sunt fișiere text mici, stocate pe dispozitivul dumneavoastră, care ajută la funcționarea site-ului și la colectarea de informații despre activitatea online. La prima accesare a site-ului, vă este prezentat un banner de cookies unde puteți alege ce categorii de cookies acceptați (necesare, de performanță, de marketing). Puteți modifica aceste preferințe oricând din setările browser-ului dumneavoastră.
              </p>
              
              <h2>8. Securitatea Datelor</h2>
              <p>
                AWD Auto a implementat măsuri tehnice și organizatorice adecvate pentru a asigura un nivel de securitate corespunzător împotriva distrugerii, pierderii, modificării, divulgării neautorizate sau accesului neautorizat la datele cu caracter personal. Utilizăm conexiuni securizate (SSL) și servere sigure pentru stocarea informațiilor.
              </p>

              <h2>9. Actualizări ale Politicii de Confidențialitate</h2>
              <p>
                Ne rezervăm dreptul de a modifica această politică de confidențialitate ori de câte ori este necesar. Versiunea actualizată va fi publicată pe această pagină și va intra în vigoare de la data publicării. Vă încurajăm să consultați periodic această secțiune.
              </p>

            </div>
          </AnimatedSection>
        </Container>
      </div>
    </Layout>
  );
};

export default PoliticaConfidentialitate;
