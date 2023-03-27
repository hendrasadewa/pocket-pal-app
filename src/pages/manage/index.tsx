import { Link } from 'react-router-dom';
import { Box, Calendar, PiggyBank } from 'iconoir-react';

import ListContainer from '@/components/ListContainer';
import ListItem from '@/components/ListItem';

function ManagePage() {
  return (
    <>
      <ListContainer>
        <Link to="/manage/category">
          <ListItem
            title={
              <div className="flex items-center gap-2">
                <Box />
                <span>Category</span>
              </div>
            }
            descriptions=""
          />
        </Link>
        <Link to="/manage/period">
          <ListItem
            title={
              <div className="flex items-center gap-2">
                <Calendar />
                <span>Period</span>
              </div>
            }
            descriptions=""
          />
        </Link>
        <Link to="/manage/budget">
          <ListItem
            title={
              <div className="flex items-center gap-2">
                <PiggyBank />
                <span>Budget</span>
              </div>
            }
            descriptions=""
          />
        </Link>
      </ListContainer>
    </>
  );
}

export default ManagePage;
