import classNames from 'classnames'

export default (props) => {
  const {
    kind = 'secondary',
    className,
    children
  } = props

  return (
    <button {...props} className={classNames(className, 'btn', `btn-${kind}`)}>
      <style jsx>{`
        .btn {
          border-style: solid;
          border-width: 1px;
          border-color: transparent;
          display: inline-block;
          vertical-align: middle;
          font: inherit;
          font-size: .8125rem;
          text-align: center;
          cursor: pointer;
          overflow: visible;
          white-space: nowrap;
          position: relative;
          margin: 0 0;
          line-height: 1.25rem;
          padding: .55rem 1.25rem;
          border-radius: .2rem;
          font-weight: 100;
          transition: all .1s ease-in-out;
        }

        .btn:hover {
          filter: contrast(170%) invert(10%);
        }

        .btn:active {
          filter: contrast(200%);
        }

        .btn[disabled] {
          filter: grayscale(100%);
          cursor: not-allowed;
          opacity: .3;
        }

        .btn-primary {
          color: #FFF;
          background-color: #D51F2C;
        }

        .btn-secondary {
          border-color: #A4A5AD;
          color: #36373E;
          background-color: #FFF;
        }
      `}</style>
      {children}
    </button>
  )
}
