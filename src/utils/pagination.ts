export const getPaginationOptions = (
  page: number,
  limit: number
): { skip: number; take: number } => {
  const skip = (page - 1) * limit
  return { skip, take: limit }
}

export const constructPaginationMeta = (
  page: number,
  limit: number,
  count: number
) => {
  const totalItems = count
  const itemsPerPage = limit
  const totalPages = Math.ceil(count / limit)
  const currentPage = page

  return {
    totalItems,
    itemsPerPage,
    totalPages,
    currentPage,
  }
}
