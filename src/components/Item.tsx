import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  TextField,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

type ItemProps = {
  id: number;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  onDelete: () => void;
  onEdit: (updatedData: Partial<ItemProps>) => void;
};

const Item = (props: ItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(props.description);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setNewDescription(props.description);
  };

  const handleSave = () => {
    props.onEdit({ id: props.id, description: newDescription });
    setIsEditing(false);
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.owner.avatar_url} />
        </ListItemAvatar>
        {isEditing ? (
          <TextField
            multiline
            fullWidth
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        ) : (
          <ListItemText primary={props.name} secondary={props.description} />
        )}

        {isEditing ? (
          <Button
            onClick={handleSave}
            variant="contained"
            size="small"
            sx={{ ml: 2 }}
          >
            Save
          </Button>
        ) : (
          <IconButton onClick={handleEditToggle} size="small" aria-label="edit">
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={props.onDelete} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default Item;
