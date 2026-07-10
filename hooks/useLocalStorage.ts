'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface UseLocalStorageControls {
  clear: () => void
  isRestored: boolean
}

/**
 * Debounced localStorage-backed state. SSR-safe (starts with `initialValue`,
 * restores from storage after mount). Writes are debounced to avoid thrashing
 * localStorage on every keystroke.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  debounceMs = 500,
): [T, (value: T | ((prev: T) => T)) => void, UseLocalStorageControls] {
  const [value, setValue] = useState<T>(initialValue)
  const [isRestored, setIsRestored] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key)
      if (stored !== null) setValue(JSON.parse(stored))
    } catch {
      // ignore malformed/inaccessible storage
    } finally {
      setIsRestored(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    if (!isRestored) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // ignore quota/access errors
      }
    }, debounceMs)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isRestored, key, debounceMs])

  const clear = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      // ignore
    }
    setValue(initialValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return [value, setValue, { clear, isRestored }]
}
