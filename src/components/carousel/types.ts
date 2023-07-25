import { ReactNode } from 'react'
import { Settings } from 'react-slick'

export type CarouselProps = {
  children?: ReactNode
  settings?: Settings
  title?: string
  spaceBetweenItems?: string
  onClick?: () => void
  className?: string
}