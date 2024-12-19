import { Button } from '@/shared/components/atoms/button'
import { InputDefault } from '@/shared/components/molecules/inputs/InputDefault'
import { MultiSelect } from '@/shared/components/molecules/select/MultiSelect'
import type { ReactNode } from 'react';

interface SearchProps {
  filters: { label: ReactNode; value: string; }[];
}

const Search = ({filters}: SearchProps) => {

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex lg:w-[1198px] lg:h-[42px] items-center justify-between'>
        <div className='flex gap-9 items-center'>
          <h1 className='text-[36px] font-semibold'>Desafios</h1>
          <div className='flex lg:w-[505px] justify-between'>
            <div className='lg:w-[240px]'>
              <InputDefault icon='MagnifyingGlass' placeholder='Seu Placeholder' iconPosition='left' />
            </div>
            <div className="lg:w-[240px]">
              <MultiSelect placeholder='filtro' max={2} items={filters} hasHint={false} classTrigger='min-w-full' />
            </div>
          </div>
        </div>
        <Button>
          Criar seu Desafio
        </Button>
      </div>
    </div>
  )
}

export default Search
