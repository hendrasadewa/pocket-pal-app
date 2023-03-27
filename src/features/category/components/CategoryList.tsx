import { Link } from 'react-router-dom';
import { EditPencil, Plus } from 'iconoir-react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';

import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import { Category } from '@/types/entities';

interface Props {
  data?: Category[];
}

export default function CategoryList({ data = [] }: Props) {
  return (
    <ListContainer>
      {data.map(({ id, name, emoji }) => (
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Emoji
                  unified={emoji}
                  emojiStyle={EmojiStyle.APPLE}
                  size={22}
                />
                <span className="font-bold">{name}</span>
              </div>
              <Link to={`/manage/category/${id}/edit`}>
                <EditPencil />
              </Link>
            </div>
          }
          key={`period-${id}`}
        />
      ))}
      <Link to="/manage/category/add">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new Category</span>
              <Plus />
            </div>
          }
        />
      </Link>
    </ListContainer>
  );
}
