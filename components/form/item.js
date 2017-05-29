import classNames from 'classnames'
import Section from './section'

const kinds = {
  section: Section
}

export default ({ item }) => {
  const { grabbing, kind } = item

  const Item = kinds[kind]

  const className = classNames(
    'form-item',
    'paper-row',
    `form-item-${kind}`,
    { grabbing }
  )

  return (
    <div className={className}>
      <style jsx>{`
        .form-item {
          position: relative;
          padding-top: 1rem;
          padding-bottom: 1rem;
          cursor: -webkit-grab;
          cursor: grab;
          transition:
            box-shadow .6s cubic-bezier(.25,.8,.25,1),
            transform 8ms ease-in-out,
            background-color .04s ease-in-out;
          background-color: #FFF;
        }

        .grabbing {
          cursor: -webkit-grabbing;
          cursor: grabbing;
          box-shadow:
            0 5px 20px rgba(0,0,0,.19),
            0 5px 6px rgba(0,0,0,.23);
        }

        .form-item:hover .grabber,
        .grabbing .grabber {
          opacity: 1;
        }

        .grabber {
          position: absolute;
          left: 0;
          top: 0;
          width: 1.875rem;
          height: 100%;
          padding: 1rem .5rem;
          opacity: 0;
          transition: opacity .1s ease-in-out;
        }

        .grabber::after {
          content: ' ';
          display: block;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(#d5d5d5 25%, transparent 26%),
            radial-gradient(#d5d5d5 25%, transparent 26%);
          background-size: .5rem .5rem;
        }
      `}</style>
      <style jsx global>{`
        body.grabbing,
        body.grabbing .form-item {
          cursor: grabbing !important;
          cursor: -webkit-grabbing !important;
        }
      `}</style>
      <div className='grabber' />
      <Item {...item} />
    </div>
  )
}
