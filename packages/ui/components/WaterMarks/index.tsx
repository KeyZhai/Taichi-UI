import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type FC,
  type ReactNode,
} from 'react'
import useWaterMark from './useWatermark'

export interface WatermarkProps {
  children?: ReactNode
  style?: CSSProperties
  className?: string
  zIndex?: number
  width?: number
  height?: number
  rotate?: number
  image?: string
  content?: string | string[]
  fontStyle?: {
    color?: string
    fontSize?: number | string
    fontFamily?: string
    fontWeight?: number | string
  }
  gap?: [number, number]
  offset?: [number, number]
  getContainer?: () => HTMLElement
}

export const Watermark: FC<WatermarkProps> = (props) => {
  const {
    children,
    style,
    className,
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    // gap：两个水印间的距离
    gap,
    //offset：水印相比于container的偏移量
    offset,
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const getContainer = useCallback(() => {
    return props.getContainer ? props.getContainer() : containerRef.current!
  }, [props.getContainer, containerRef.current])

  const { generateWatermark } = useWaterMark({
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    gap,
    offset,
    getContainer,
  })

  useEffect(() => {
    generateWatermark({
      zIndex,
      width,
      height,
      rotate,
      image,
      content,
      fontStyle,
      gap,
      offset,
      getContainer,
    })
  }, [
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    JSON.stringify(fontStyle),
    JSON.stringify(gap),
    JSON.stringify(offset),
    getContainer,
  ])
  return (
    <div className={className} style={style} ref={containerRef}>
      {children}
    </div>
  )
}
