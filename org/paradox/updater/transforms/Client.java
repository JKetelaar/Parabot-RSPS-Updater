package org.paradox.updater.transforms;

import org.objectweb.asm.tree.ClassNode;
import org.objectweb.asm.tree.FieldNode;
import org.paradox.updater.handle.Updater;
import org.paradox.updater.model.Transform;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:33
 * To change this template use File | Settings | File Templates.
 */
public class Client extends Transform {

    @Override
    public boolean validate(ClassNode classNode) {
        return classNode.name.equals("client");
    }

    @Override
    public void execute(ClassNode classNode) {
        for(FieldNode field : classNode.fields) {
            int count2 = 0;
            if(field.desc.contains("L")) {
                String name = field.desc;
                for(FieldNode field2 : classNode.fields) {
                    if(field2.desc.contains("[" +name)) {
                        count2++;
                    }

                }
            }

            if(count2 == 1 && getCount(field.desc, classNode.fields.toArray(new FieldNode[classNode.fields.size()])) == 2)  {

                String player = field.desc.replace("L", "").replace(";", "");
                addClass(Updater.classes.get(player), "Player");

            }
        }


    }

    public int getCount(String desc, FieldNode[] fields) {
        int total = 0;
        for(FieldNode f : fields) {
            if(f.desc.contains(desc)) {
                total++;
            }
        }
        return total;
    }

}
