export default ({ title, description }) => (
  <div>
    <style jsx>{`
      h2 {
        margin: 1rem 0 0;
        font-size: 1.5rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.875rem;
      }

      p {
        margin: 0;
        color: #A4A5AD;
        font-size: .75rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.875rem;
      }
    `}</style>
    <h2>{title || 'New Section'}</h2>
    <p>{description || 'Some section description'}</p>
  </div>
)
