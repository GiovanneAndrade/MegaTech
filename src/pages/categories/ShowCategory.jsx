import React from 'react'
import { CategoriesContext } from '../../contexts/Categories';
import { Titles } from '../../components/title/Title';
import { ListProducts } from '../../components/listProducts/ListProducts';
import { ContainerRightInternal } from '../../components/containerRight/ContainerRightStyles';

export const ShowCategory = () => {
    const { showCategory, setShowCategory , isCategory, setIsCategory} = React.useContext(CategoriesContext);
    console.log(isCategory)
  return (
    <ContainerRightInternal >
       <Titles titles={isCategory?.name} />
       <ListProducts type={'isCategory'} products={isCategory?.products}/>
    </ContainerRightInternal>
  )
}
