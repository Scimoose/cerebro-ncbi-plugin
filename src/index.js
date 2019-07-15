import React from 'react'
import Preview from './Preview'

import iconPath from './logo.png'
const id = 'search-web'
export const order = 11
export const icon = iconPath

/**
 * Search term in google
 *
 * @param  {String} options.term
 * @param  {Object} options.actions
 * @param  {Function} options.display
 */


export const fn = ({ term, actions, display }) => {
  //plugin code here

  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://www.ncbi.nlm.nih.gov/pubmed/?term=${q}`)
    actions.hideWindow()
  }

  display({
    id,
    icon,
    order,
    title: `Search NCBI (PubMed) for ${term}`,
    onSelect: () => search(term),
    getPreview: () => <Preview query={term} key={term} search={search} />
  })
}
