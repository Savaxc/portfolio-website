import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in the middle of the viewport,
 * so the header can highlight the matching navigation link.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    for (const element of elements) {
      observer.observe(element)
    }

    // Keep the last section active when the page is scrolled to the very bottom.
    const handleScroll = () => {
      const distanceToBottom =
        document.documentElement.scrollHeight - (window.innerHeight + window.scrollY)

      if (distanceToBottom < 8) {
        setActive(ids[ids.length - 1])
      } else if (window.scrollY < 40) {
        setActive(ids[0])
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ids])

  return active
}
