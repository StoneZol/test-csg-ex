'use client'
import React, { useState } from 'react'

export default function useShowMenu() {
    const [showMenu, setShowMenu] = useState(false)
  return {showMenu, setShowMenu} 
}
