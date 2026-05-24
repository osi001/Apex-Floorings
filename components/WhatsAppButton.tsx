const WHATSAPP_NUMBER = '2348085148898'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20flooring%20options.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="is-circle whatsapp-fab"
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '24px',
        zIndex: 50,
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        flexShrink: 0,
      }}
    >
      {/* Two-tone WhatsApp brand mark (speech bubble + phone) */}
      <svg viewBox="0 0 32 32" width="48" height="48" aria-hidden="true">
        <path
          fill="#25D366"
          d="M16.001 0C7.165 0 0 7.165 0 16c0 2.821.732 5.587 2.124 8.024L0 32l8.286-2.072A15.987 15.987 0 0 0 16.001 32C24.836 32 32 24.835 32 16S24.836 0 16.001 0z"
        />
        <path
          fill="#FFFFFF"
          d="M22.79 19.47c-.39-.198-2.31-1.144-2.667-1.273-.357-.13-.617-.198-.875.196-.26.394-1.005 1.273-1.232 1.534-.227.26-.453.293-.844.097-.39-.198-1.65-.617-3.142-1.949-1.16-1.038-1.945-2.32-2.172-2.713-.227-.394-.024-.607.17-.804.176-.176.39-.453.586-.68.196-.227.26-.39.39-.65.13-.26.065-.49-.033-.682-.098-.196-.875-2.108-1.196-2.886-.317-.764-.638-.66-.875-.673-.227-.013-.486-.013-.747-.013-.26 0-.682.097-1.038.49-.357.394-1.36 1.33-1.36 3.242 0 1.913 1.392 3.762 1.587 4.022.196.26 2.737 4.18 6.633 5.866.927.4 1.65.638 2.213.815.93.296 1.776.255 2.445.155.746-.111 2.31-.943 2.635-1.853.325-.91.325-1.69.227-1.853-.097-.165-.357-.26-.747-.453z"
        />
      </svg>
    </a>
  )
}
