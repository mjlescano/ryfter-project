import classNames from 'classnames'

export default ({
  children,
  className,
  onChange,
  name,
  value
}) => {
  const handleChange = (evt) => {
    onChange({
      target: {
        name,
        value: evt.target.checked
      }
    })
  }

  return (
    <label className={classNames('checkbox', className)}>
      <style jsx>{`
        label {
          padding: .7rem;
          font-size: .875rem;
          font-weight: 400;
          cursor: pointer;
        }
      `}</style>
      {children}
      <input
        type='checkbox'
        defaultChecked={value}
        onChange={handleChange} />
    </label>
  )
}
