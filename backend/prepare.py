import os
import shutil

apps_base_dir = 'apps'


def remove_directory(path):
    if os.path.exists(path):
        shutil.rmtree(path)
        print(f"Deleted: {path}")
    else:
        print(f"Directory not exist: {path}")


def create_directory(path):
    os.makedirs(path, exist_ok=True)


def create_init_file(path):
    init_file_path = os.path.join(path, '__init__.py')
    if not os.path.exists(init_file_path):
        with open(init_file_path, 'w') as f:  # Create an empty __init__.py
            pass
        print(f"Created: {init_file_path}")
    else:
        print(f"__init__.py already exists: {init_file_path}")


def list_directories(path):
    return [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]


core_pycache_dir = 'core/__pycache__'
remove_directory(core_pycache_dir)

apps_pycache_dir = 'apps/__pycache__'
remove_directory(apps_pycache_dir)

apps_list = list_directories(apps_base_dir)

for app in apps_list:
    app_path = os.path.join(apps_base_dir, app)

    if os.path.isdir(app_path):
        pycache_app_dir = os.path.join(app_path, '__pycache__')
        migrations_dir = os.path.join(app_path, 'migrations')

        remove_directory(pycache_app_dir)
        remove_directory(migrations_dir)

        create_directory(migrations_dir)
        create_init_file(migrations_dir)

print("Process finished")
