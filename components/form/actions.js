import Button from '../button'

export default () => (
  <div className='form-actions paper-wrapper paper-row'>
    <style jsx>{`
      .form-actions {
        text-align: center;
      }

      .form-actions :global(button) {
        margin: 0 5px;
      }
    `}</style>
    <Button>Add section</Button>
    <Button>Add question</Button>
  </div>
)
