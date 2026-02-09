import React from 'react'
import Layout from '../components/layout/Layout'

const Datenschutz = () => (
  <Layout>
    <div className="container mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="prose lg:prose-xl">
        <p>
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist
          für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit
          Ihren Daten.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Verantwortliche Stelle</h2>
        <p>
          Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          <br />
          [Ihr Name/Firmenname]
          <br />
          [Ihre Straße und Hausnummer]
          <br />
          [Ihre PLZ und Stadt]
          <br />
          [Ihre E-Mail-Adresse]
          <br />
          [Ihre Telefonnummer]
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Datenerfassung auf unserer Website</h2>
        <p>
          Diese Website ist eine reine Landingpage und verarbeitet keine personenbezogenen Daten. Es
          werden keine Kontaktformulare, Newsletter-Anmeldungen oder andere Funktionen verwendet,
          die eine Eingabe von personenbezogenen Daten erfordern.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
          Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
          und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Cookies</h3>
        <p>
          Unsere Website verwendet ausschließlich technisch notwendige Cookies. Cookies sind kleine
          Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie
          dienen dazu, unsere Website nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
        <p>
          Die von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende
          Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert,
          bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten
          Besuch wiederzuerkennen.
        </p>
        <p>
          Die Verarbeitung von technisch notwendigen Cookies erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO, da wir ein berechtigtes Interesse an der Speicherung von Cookies zur
          technisch fehlerfreien und optimierten Bereitstellung unserer Dienste haben. Es werden
          keine personenbezogenen Daten in diesen Cookies gespeichert.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Ihre Rechte als Betroffener</h2>
        <p>
          Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf
          Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
          Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
          Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
          verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
        </p>
        <p>
          Da auf dieser Webseite keine personenbezogenen Daten verarbeitet werden, ist die Ausübung
          dieser Rechte in der Regel nicht anwendbar.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          4. Aktualität und Änderung dieser Datenschutzerklärung
        </h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die
          Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter
          gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
          Datenschutzerklärung zu ändern.
        </p>
      </div>
    </div>
  </Layout>
)

export default Datenschutz
