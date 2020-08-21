module.exports = {
  PUBLIC_DIR: "public",
  AVATARS_DIR: "uploads/avatars",
  RECORDS_DIR: "uploads/records",
  SALT_ROUNDS: 10,
  USER_ROLES: ["learner", "teacher"],
  MIME_EXTENSION_MAP: {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "audio/mpeg": ".mp3",
    "audio/ogg": ".oga"
  },
  DB_ERR_MAP: {
    23505: { msg: "Violation de contrainte unique SQL", code: 409 },
    42601: { msg: "Erreur de syntaxe dans la requête SQL" }
  },
  NODE_ERR_MAP: {
    ENOENT: { msg: "Erreur d'écriture de fichier, tentative d'accès à un chemin inexistant" },
    ENOTDIR: {
      msg: "Erreur d'écriture de fichier, le chemin fourni ne correspond pas à un dossier"
    }
  }
};
